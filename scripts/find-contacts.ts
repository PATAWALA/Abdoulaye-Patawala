// scripts/find-contacts.ts
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const MAX_REQUESTS_PER_RUN = 20;
const MAX_RESULTS_PER_SEARCH = 3;

async function searchProspects(query: string) {
  await new Promise(r => setTimeout(r, 2000));
  
  const apiKey = process.env.GOOGLE_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;

  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}&lr=lang_fr&num=3`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    
    // Afficher la réponse complète pour debug
    console.log(`🔍 Réponse pour "${query}":`, JSON.stringify(data).substring(0, 200));
    
    if (data.error) {
      console.error(`❌ Erreur API: ${data.error.message}`);
      return [];
    }
    
    if (!data.items || data.items.length === 0) {
      console.log(`⚠️ Aucun résultat pour "${query}"`);
    }
    
    return data.items || [];
  } catch (error) {
    console.error("Erreur recherche:", error);
    return [];
  }
}

function extractInfo(item: any) {
  const snippet = item.snippet || '';
  const link = item.link || '';
  
  const emailMatch = snippet.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
  const email = emailMatch ? emailMatch[0] : null;
  
  const phoneMatch = snippet.match(/(\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9})/);
  const phone = phoneMatch ? phoneMatch[0] : null;

  return {
    company: item.title?.split('|')[0]?.trim() || item.title || 'Inconnu',
    email,
    phone,
    linkedin: link.includes('linkedin.com') ? link : null,
    source: link,
    snippet: snippet
  };
}

function cleanCategory(category: string): string {
  return category
    .split('·')[0]
    .trim()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ');
}

async function main() {
  console.log('🔍 Démarrage de la recherche de contacts...\n');
  
  const { data: categories } = await supabase
    .from('sources')
    .select('category')
    .not('category', 'is', null);
  
  const uniqueCategories = [...new Set(categories?.map(c => cleanCategory(c.category)))];
  let totalFound = 0;
  let requestsCount = 0;

  for (const category of uniqueCategories) {
    if (requestsCount >= MAX_REQUESTS_PER_RUN) {
      console.log(`\n⏹️ Limite de ${MAX_REQUESTS_PER_RUN} requêtes atteinte. Continuez demain.`);
      break;
    }
    
    console.log(`📂 Recherche dans : ${category}`);
    const results = await searchProspects(`${category} Côte d'Ivoire`);
    requestsCount++;
    
    for (const item of results) {
      const info = extractInfo(item);
      
      const { data: existing } = await supabase
        .from('prospects')
        .select('id')
        .eq('company', info.company)
        .single();
        
      if (existing) {
        console.log(`⏩ Déjà existant : ${info.company}`);
        continue;
      }
      
      const { error } = await supabase
        .from('prospects')
        .insert([{
          name: info.company,
          company: info.company,
          sector: category,
          email: info.email,
          phone: info.phone,
          linkedin: info.linkedin,
          status: 'A traiter',
          source: info.source
        }]);
        
      if (error) {
        console.error(`❌ Erreur insertion ${info.company}:`, error.message);
      } else {
        console.log(`✅ Nouveau : ${info.company} | 📧 ${info.email || 'N/A'} | 📱 ${info.phone || 'N/A'}`);
        totalFound++;
      }
    }
  }
  
  console.log(`\n🏁 Recherche terminée. ${totalFound} nouveaux prospects ajoutés.`);
  console.log(`📊 Requêtes utilisées : ${requestsCount}/${MAX_REQUESTS_PER_RUN}`);
  console.log('📋 Consultez /admin/crm pour voir la liste complète.');
}

main().catch(console.error);
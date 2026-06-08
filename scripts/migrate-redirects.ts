import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'

// Pour les scripts, on utilise le client Supabase standard avec la clé de service
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function migrateRedirects() {
  const redirectMap: Record<string, string> = {}
  
  console.log('🔍 Création du fichier de redirections...')
  
  const vercelRedirects = Object.entries(redirectMap).map(([source, destination]) => ({
    source,
    destination,
    permanent: true
  }))
  
  fs.writeFileSync(
    'redirects-migration.json',
    JSON.stringify(vercelRedirects, null, 2)
  )
  
  console.log(`✅ ${vercelRedirects.length} redirections migrées`)
}

migrateRedirects()
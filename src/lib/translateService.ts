interface TranslateResponse {
  data: {
    translations: { translatedText: string }[];
  };
}

export async function translateText(
  text: string,
  targetLanguage: string = 'en'
): Promise<string> {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!apiKey) {
    console.warn('Google Translate API key missing, returning original text');
    return text;
  }

  try {
    const res = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          format: 'text',
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Google API error: ${res.status} ${res.statusText}`);
    }

    const json: TranslateResponse = await res.json();
    return json.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation failed:', error);
    return text;
  }
}
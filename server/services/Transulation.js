const { Translate } = require('@google-cloud/translate').v2;

// Replace 'your-key.json' with the path to your JSON key file
const translate = new Translate({ keyFilename: 'your-key.json' });

// Example function to translate text
async function translateText(text, targetLanguage) {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
}

// Example usage
const originalText = 'Hello, world!';
const targetLanguage = 'es'; // Replace with your desired target language code

translateText(originalText, targetLanguage)
  .then((translation) => {
    console.log(`Translated text: ${translation}`);
  })
  .catch((error) => {
    console.error('Translation error:', error);
  });

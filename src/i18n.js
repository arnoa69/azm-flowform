import { createI18n } from "vue-i18n";

const getCurrentLanguage = () => {
  // Schritt 1: Überprüfe, ob die Sprache im Query-String vorhanden ist
  const queryParams = new URLSearchParams(window.location.search);
  const queryLanguage = queryParams.get('lang'); // Hier verwendest du 'lang' als Schlüssel im Query-String

  if (queryLanguage) {
    // Wenn die Sprache im Query-String gefunden wurde, gib sie zurück
    return queryLanguage;
  }

  // Schritt 4: Falls keine Sprache gefunden wurde, gib eine Standardsprache zurück
  return 'es'; // Hier kannst du deine Standardsprache festlegen
};

const i18n = createI18n({
  locale: getCurrentLanguage(),
  fallbackLocale: 'en',
  messages: {
    en: require('./i18n/en.json'),
    de: require('./i18n/de.json'),
    fr: require('./i18n/fr.json'),
    dk: require('./i18n/dk.json'),
    ee: require('./i18n/ee.json'),
    es: require('./i18n/es.json'),
    fi: require('./i18n/fi.json'),
    it: require('./i18n/it.json'),
    lu: require('./i18n/lu.json'),
    ne: require('./i18n/ne.json'),
    no: require('./i18n/no.json'),
    pt: require('./i18n/pt.json'),
    se: require('./i18n/se.json'),
  }
})

export default i18n;
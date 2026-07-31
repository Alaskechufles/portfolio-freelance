import { useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/translations';
import { LanguageContext } from './languageContext';

function getInitialLanguage() {
  const stored = localStorage.getItem('language');
  if (stored === 'en' || stored === 'es') return stored;
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en')),
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

import { useState, useCallback } from 'react';
import i18nData from '../data/i18n.json';

type Language = 'en' | 'so';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: any = i18nData[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }, [language]);

  return { language, setLanguage, t };
};
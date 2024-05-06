import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ruNs1 from './locales/ru/translation.json'
import kgNs1 from './locales/kg/translation.json'
import engNs1 from './locales/eng/translation.json'

export const defaultNS = 'translation';

const resources = {
    ru: {
        translation: ruNs1
    },
    kg: {
        translation: kgNs1
    },
    eng: {
        translation: engNs1
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'ru',
        defaultNS,
        interpolation: {
            escapeValue: false,
        },
        resources,
        detection: {
            order: ["localStorage", "cookie"],
            caches: ["localStorage", "cookie"],
        },
    });

export default i18n;
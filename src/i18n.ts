import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

const i18n = createI18n({
    legacy: false,
    locale: window.navigator.language,
    fallbackLocale: 'es-ES',
    messages: {
        "en-US": en,
        "es-ES": es,
        en,
        es,
    },
});

export default i18n;
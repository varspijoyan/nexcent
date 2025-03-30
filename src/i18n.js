import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";

i18n
.use(initReactI18next)
.use(languageDetector)
.init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        // languages
        en
    },
    lng: localStorage.getItem("language") || 'en'
});

export default i18n;
import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      // languages
      en,
      ru,
    },
    lng: localStorage.getItem("language") || "en",
  });

export default i18n;

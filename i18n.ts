import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./src/app/locales/translationEN.json";
import translationAR from "./src/app/locales/translationAR.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

const initI18n = () => {
  let lng = "en";

  if (typeof window !== "undefined") {
    lng = localStorage.getItem("language") || "en";
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: lng, // default language
    fallbackLng: lng,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
};

initI18n();

export default i18n;

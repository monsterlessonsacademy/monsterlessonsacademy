import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import en from "../i18n/en/translation.json";
import de from "../i18n/de/translation.json";

i18n
  .use(initReactI18next)
  // .use(HttpBackend)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: {
    //   loadPath: "http://localhost:3005/locales/{{lng}}/{{ns}}.json",
    // },
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
    },
    // language resources
    // resources: {
    //   en: {
    //     translation: {
    //       welcome: "Welcome",
    //       news: "News",
    //     },
    //   },
    //   de: {
    //     translation: {
    //       welcome: "Willkommen",
    //       news: "Nachrichten",
    //     },
    //   },
    // },
  });

export default i18n;

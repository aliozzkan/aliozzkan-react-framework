import i18n from "i18next";
import {} from "react-redux";
import {setLanguageAction} from "store/actions/app-actions";
import {store} from "store";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tr from "locales/tr.json";
import en from "locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

const fallbackLng = "en";
const whitelist = ["en", "tr"];

const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/" },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng,
    whitelist,
    interpolation: {
      escapeValue: false,
    },
    detection: options,
  })
  .then(() => {
    store.dispatch(setLanguageAction({language: i18n.language}));
  });

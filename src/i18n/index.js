import Vue from 'vue';
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import VueI18n from 'vue-i18n';
import locales from './locales';

Vue.use(VueI18n);

// Separate each language from locales
const getLocale = (lang, lcs) => {
  let locale = {};

  if (Object.prototype.hasOwnProperty.call(lcs, lang)) {
    locale = lcs[lang];
  } else {
    Object.keys(lcs).forEach((key) => {
      locale[key] = getLocale(lang, lcs[key]);
    });
  }

  return locale;
};

const enLocale = Object.assign({}, getLocale('en', locales), enLang);
const zhLocale = Object.assign({}, getLocale('zh-CN', locales), zhLang);
const messages = {
  en: enLocale,
  'zh-CN': zhLocale,
};

export default new VueI18n({
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages,
});

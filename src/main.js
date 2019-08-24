import '@babel/polyfill';
import Vue from 'vue';
import moment from 'moment';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import API from './api';
import * as consts from './utils/consts';
import './utils/compatible-ie';
import i18n from './i18n';
import Mock from './mock';
import './plugins/vuetify';
import './plugins/echarts';
import './components/svg-icons';
import { parseURL } from './utils/util';
import VBasicCard from './components/VBasicCard.vue';

Vue.component('v-basic-card', VBasicCard);

NProgress.configure({
  template: `<div class="bar" role="bar" style="background:#1DE2C3;"><div class="peg"></div></div>
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
  showSpinner: false,
});

// vconsole
try {
  if (Object.values(parseURL(window.location.href).params).includes('vdebug')) {
    import('./utils/vconsole').then(() => {});
  }
} catch (err) {
  console.error('>>>vconsole', err);
}

Mock.bootstrap();

Vue.router = router;
Vue.store = store;

Vue.prototype.$api = API;
Vue.prototype.$consts = consts;
Vue.prototype.$moment = moment;

Vue.filter('formatDate', (v, isUTC = true, dateFormat = 'YYYY-MM-DD HH:mm:ss') => {
  if (v) {
    return isUTC ? moment.utc(v).local().format(dateFormat) : moment.utc(v).format(dateFormat);
  }

  return '';
});

const supportedLangs = ['zh-CN', 'en'];
const userLocale = navigator.language || navigator.userLanguage;

Vue.router.beforeEach((to, from, next) => {
  NProgress.start();
  const { token } = store.getters;
  if (to.path === '/login') {
    store.dispatch('logout');
    next();
    NProgress.done();
  } else if (!token) {
    next(`/login?redirect=${to.fullPath}`);
    NProgress.done();
  } else {
    const { me } = store.getters;
    if (!me || !me.name) {
      store.dispatch('readMe', { token })
        .then(() => {
          next();
        })
        .catch(() => {
          next('/login');
        });
    } else {
      next();
    }
  }
});
Vue.router.beforeEach((to, from, next) => {
  const { locale } = to.query;

  if (locale) {
    /* eslint-disable no-param-reassign */
    delete to.query.locale;
    if (supportedLangs.includes(locale)) {
      i18n.locale = locale;
      localStorage.setItem('VUE-ADMIN-VUETIFY_LANGUAGE', locale);
    }
  }

  next();
});
Vue.router.afterEach(() => {
  NProgress.done();
});

i18n.locale = localStorage.getItem('VUE-ADMIN-VUETIFY_LANGUAGE')
  || (supportedLangs.includes(userLocale) ? userLocale : 'zh-CN');
Vue.prototype.$locale.use(i18n.locale);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import SvgIcon from './SvgIcon.vue';

Vue.component('svg-icon', SvgIcon);

// more detail
// [require.context](https://webpack.js.org/guides/dependency-management/#require-context)
const importAll = r => r.keys().forEach(r);

importAll(require.context('./icons', false, /\.svg$/));

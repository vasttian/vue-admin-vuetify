import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VAlert,
  VAutocomplete,
  VAvatar,
  VBadge,
  VBreadcrumbs,
  VBtn,
  VBtnToggle,
  VCard,
  VCheckbox,
  VCombobox,
  VDataTable,
  VDatePicker,
  VDialog,
  VExpansionPanel,
  VFooter,
  VForm,
  VGrid,
  VIcon,
  VInput,
  VLabel,
  VList,
  VMenu,
  VMessages,
  VNavigationDrawer,
  VOverflowBtn,
  VPagination,
  VProgressCircular,
  VProgressLinear,
  VRadioGroup,
  VRangeSlider,
  VSelect,
  VSlider,
  VSnackbar,
  VSpeedDial,
  VStepper,
  VSubheader,
  VSwitch,
  VSystemBar,
  VTabs,
  VTextField,
  VTextarea,
  VTimePicker,
  VToolbar,
  VTooltip,
  transitions,
} from 'vuetify';
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import i18n from '../i18n';
import Snackbar from '../components/snackbar/index';
import '../stylus/main.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBreadcrumbs,
    VBtn,
    VBtnToggle,
    VCard,
    VCheckbox,
    VCombobox,
    VDataTable,
    VDatePicker,
    VDialog,
    VExpansionPanel,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VInput,
    VLabel,
    VList,
    VMenu,
    VMessages,
    VNavigationDrawer,
    VOverflowBtn,
    VPagination,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VRangeSlider,
    VSelect,
    VSlider,
    VSnackbar,
    VSpeedDial,
    VStepper,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTextField,
    VTextarea,
    VTimePicker,
    VToolbar,
    VTooltip,
    transitions,
  },
  lang: {
    locales: { enLang, zhLang },
    current: 'enLang',
  },
});

Vue.prototype.$message = Snackbar;
const that = Vue.prototype;
that.$locale = {
  use(lang) {
    i18n.locale = lang;
    that.$vuetify.lang.current = lang === 'zh-CN' ? 'zhLang' : 'enLang';
  },
  current() {
    return i18n.locale;
  },
};
<template>
  <div class="change-lang">
    <span
      @click="switchLang('zh-CN')"
      :class="{ 'active-lang': currentLang === 'zh-CN' }">
      中文
    </span> /
    <span
      @click="switchLang('en')"
      :class="{ 'active-lang': currentLang === 'en' }">
      En
    </span>
  </div>
</template>

<script>
export default {
  name: 'LangBar',
  data() {
    return {
      currentLang: this.$i18n.locale,
    };
  },
  methods: {
    switchLang(lang = 'zh-CN') {
      this.currentLang = lang;
      this.$locale.use(lang);
    },
  },
};
</script>

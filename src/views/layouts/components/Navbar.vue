<template>
  <header>
    <v-toolbar
      app
      flat
      dense
      height="56"
      :clipped-left="$vuetify && $vuetify.breakpoint.mdAndUp">
      <v-toolbar-side-icon @click.stop="$emit('toggleSidebar')"></v-toolbar-side-icon>
      <v-toolbar-title>VUE-ADMIN-VUETIFY</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <template v-for="(route, index) in $router.options.routes[1].children">
          <template v-if="route.meta && route.meta.hasSub">
            <v-menu
              :key="index"
              bottom
              origin="bottom center"
              offset-y
              transition="scale-transition">
              <v-btn
                slot="activator"
                flat>
                {{ route.name }}
                <v-icon dark>arrow_drop_down</v-icon>
              </v-btn>
              <v-list :key="index">
                <v-list-tile
                  v-for="(cRoute, idx) in route.children"
                  :to="{ name: cRoute.name }"
                  :key="idx">
                  <v-list-tile-action v-if="cRoute.meta && cRoute.meta.icon">
                    <v-icon>{{ cRoute.meta.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ cRoute.name }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-menu>
          </template>
          <template v-else>
            <v-btn
              :key="index"
              flat
              :to="{ name: route.name }">
              {{ route.name }}
              </v-btn>
          </template>
        </template>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-toolbar-title slot="activator">
          <v-avatar size="40">
            <img
              src="http://67.218.155.2:8082/1.png"
              alt="Demo">
          </v-avatar>
          <span style="margin-left: 10px;">vasttian</span>
          <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              {{ $t('common.account') }}
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>
              {{ $t('common.logout') }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      currentYear: (new Date()).getFullYear(),
      currentLang: this.$i18n.locale,
      drawerRight: true,
    };
  },
  computed: {
    activeMenu() {
      return this.$route.name;
    },
    user() {
      return { username: 'Demo' };
    },
  },
  methods: {
    roleShow(route) {
      // hack, there is no user when logout
      if (!this.user || route.meta.hidden) {
        return false;
      }

      const { auth } = route.meta;
      return auth ? (!auth.length && !this.user.role) || auth.indexOf(this.user.role) !== -1 : !auth;
    },
    switchLang(lang = 'zh-CN') {
      this.currentLang = lang;
      this.$locale.use(lang);
      localStorage.setItem('VUE-ADMIN-VUETIFY_LANGUAGE', lang);
    },
    logout() {
      console.log('logout');
      this.$router.push({ name: 'Login' });
      this.$message({
        type: 'info',
        text: 'Ahem: Please add logout function',
      });
    },
  },
  created() {
  },
};
</script>

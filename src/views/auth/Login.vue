<template>
  <div class="panel-wrapper">
    <span class="logo">
      <img src="../../assets/logo.png" alt="">
    </span>

    <div class="slogan-wrapper">
      <div class="slogan">
        <img src="../../assets/login-bg2.svg" alt="">
      </div>
    </div>

    <div class="panel-content">
      <v-app class="login-con">
        <!-- <v-spacer></v-spacer> -->
        <v-content>
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
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex class="frame">
                <h1 v-if="!isMobile">
                  Login
                </h1>
                <v-form>
                  <v-text-field
                    v-model="form.username"
                    prepend-icon="person"
                    clearable
                    :label="$t('common.username')"
                    @keyup.enter.native="login"
                    required></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    prepend-icon="lock"
                    @keyup.enter.native="login"
                    clearable
                    type="password"
                    :label="$t('common.password')"
                    required></v-text-field>
                  <v-layout
                    column
                    wrap
                    justify-end
                    align-end>
                    <v-flex>
                      <v-btn
                        flat
                        small
                        color="primary"
                        @click="redirectForgotPassword">
                        {{ $t('common.forgetPassword') }}
                      </v-btn>
                    </v-flex>
                    <v-flex>
                      <v-btn
                        :loading="loginLoading"
                        @click="login">
                        <span slot="loader">Loading...</span>
                        {{ $t('common.login') }}
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>

        <v-footer
          color="#fbfbfb"
          height="auto">
          <v-layout>
            <v-flex text-xs-center>
              <!-- {{ $t('common.copyrightMessage', { currentYear }) }} -->
            </v-flex>
          </v-layout>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import { isMobile } from '@/utils/util';

export default {
  data() {
    return {
      currentYear: (new Date()).getFullYear(),
      form: {
        username: 'admin',
        password: 'admin123',
      },
      loginLoading: false,
      currentLang: this.$i18n.locale,
    };
  },
  computed: {
    isMobile() {
      return isMobile();
    },
  },
  methods: {
    login() {
      if (!this.form.password || !this.form.username) {
        return;
      }

      this.loginLoading = true;
      this.$store.dispatch('login', this.form)
        .then(() => {
          try {
            this.$router.push({ name: 'Index' });
          } catch (err) {
            this.$router.push({ path: '/' });
          }
        })
        .catch((res) => {
          console.log('login-failed', res);
          this.$message({
            type: 'error',
            text: this.$t('common.invalid_password_username'),
          });
        })
        .finally(() => {
          this.loginLoading = false;
        });
    },
    switchLang(lang) {
      this.currentLang = lang;
      this.$locale.use(lang);
      localStorage.setItem('VUE-ADMIN-VUETIFY_LANGUAGE', lang);
    },
    redirectForgotPassword() {
      console.log('redirectForgotPassword');
      this.$message({
        type: 'info',
        text: 'Ahem: Please add redirect function',
      });
    },
  },
  created() {
  },
};
</script>

<style lang="scss">
  @import "../../styles/_login.scss";
</style>

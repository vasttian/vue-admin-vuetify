<template>
  <!-- Currently `mouseenter` and `mouseleave` is invalid -->
  <div
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <v-snackbar
      v-model="visible"
      :color="color || type"
      :top="y === 'top'"
      :left="x === 'left'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        dark
        flat
        @click="close"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { VSnackbar, VBtn } from 'vuetify';

export default {
  components: {
    VSnackbar,
    VBtn,
  },
  data() {
    return {
      visible: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      text: '',
      color: null,
      timer: null,
      closed: false,
      duration: this.timeout,
      type: 'info',
    };
  },
  methods: {
    close() {
      this.visible = false;
      this.closed = true;
      setTimeout(() => {
        // 从DOM里将这个组件移除
        this.$destroy(true);
        // console.log('this.$el', this.$el);
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    },
    clearTimer() {
      // TODO: Can be disabled when the mouse is over.
      // this.timeout = 0;
      clearTimeout(this.timer);
    },
    startTimer() {
      // this.timeout = this.duration;
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
            this.duration = 0;
          }
        }, this.duration);
      }
    },
    keydown(e) {
      // esc关闭消息
      if (e.keyCode === 27 && !this.closed) {
        this.close();
      }
    },
  },
  mounted() {
    this.duration = this.timeout;
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  },
};
</script>

import Vue from 'vue';
import VMain from './VMain.vue';

const SnackbarConstructor = Vue.extend(VMain);

let instance;
let seed = 1;
const instances = [];

const Snackbar = (options) => {
  let opts = options || {};
  const id = `message_${seed += 1}`;

  if (typeof opts === 'string') {
    opts = {
      text: opts,
    };
  }

  instance = new SnackbarConstructor({
    data: opts,
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = seed + 1001;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach((type) => {
  Snackbar[type] = (options) => {
    let opts = options || {};

    if (typeof opts === 'string') {
      opts = {
        text: opts,
      };
    }

    opts.type = type;
    return Snackbar(opts);
  };
});

Snackbar.close = (id) => {
  for (let i = 0, len = instances.length; i < len; i += 1) {
    if (id === instances[i].id) {
      instances.splice(i, 1);
      break;
    }
  }
};

/**
 * can call Message.closeAll() to manually close all the instances.
 */
Snackbar.closeAll = () => {
  for (let i = 0, len = instances.length; i < len; i += 1) {
    instances[i].close();
  }
};

export default Snackbar;

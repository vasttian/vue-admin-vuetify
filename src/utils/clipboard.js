import Vue from 'vue';
import ClipboardJS from 'clipboard';

function handleClipboard(target, text) {
  if (!ClipboardJS.isSupported()) {
    Vue.prototype.$message({
      text: 'The current browser does not support copying',
      type: 'error',
    });
    return;
  }

  const clipboard = new ClipboardJS(target, {
    text: () => text,
  });

  function removeEventListener() {
    clipboard.off('error');
    clipboard.off('success');
    clipboard.destroy();
  }

  clipboard.on('error', (e) => {
    Vue.prototype.$message({
      text: 'Copy failed',
      type: 'error',
    });
    removeEventListener();
    console.error('Copy failed Action:', e.action);
    console.error('Copy failed Trigger:', e.trigger);
  });
  clipboard.on('success', (e) => {
    Vue.prototype.$message({
      text: 'Copied successfully',
      type: 'success',
    });
    removeEventListener();
    e.clearSelection();
    // console.log('Copy successfully', e);
  });
}

export default handleClipboard;

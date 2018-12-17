import Vue from "vue";

const resubmit = Vue.directive('resubmit', {
  inserted(el, binding) {
    el.addEventListener('click', e => {
      if (!el.disabled) {
        el.disabled = true;
        let timer = setTimeout(() => {
          el.disabled = false;
        }, 2000)
      }
    })
  }
});
export default resubmit

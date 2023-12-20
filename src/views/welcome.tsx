import { RouterView } from 'vue-router'
import { defineComponent, ref } from "vue";

export const welcome = defineComponent({
  setup(props, context) {
    return () => (
      <div><RouterView /></div>
    );
  }
})
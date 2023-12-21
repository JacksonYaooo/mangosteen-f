import { defineComponent } from "vue";
import s from './WelcomLayout.module.scss'

export const WelcomLayout = defineComponent({
  setup(props, context) {
    const { slots } = context
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
          {/* 相当于是：slots.icon && slots.icon()意思是存在才调用 */}
          {slots.title?.()}
        </div>
        <div class={s.actions}>
          {slots.buttons?.()}
        </div>
      </div>
    );
  }
})
import { FunctionalComponent } from "vue";
import s from './WelcomLayout.module.scss'

export const WelcomLayout: FunctionalComponent = (props, context) => {
  const { slots: { icon, title, buttons } } = context
  return (
    <div class={s.wrapper}>
      <div class={s.card}>
        {icon?.()}
        {/* 相当于是：slots.icon && slots.icon()意思是存在才调用 */}
        {title?.()}
      </div>
      <div class={s.actions}>
        {buttons?.()}
      </div>
    </div>
  );
}

WelcomLayout.displayName = 'WelcomeLayout'
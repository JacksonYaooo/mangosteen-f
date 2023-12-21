import { defineComponent, ref } from "vue";
import s from './WelcomLayout.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from 'vue-router'
import { WelcomLayout } from "./WelcomeLayout";

export const Forth = defineComponent({
  setup(props, context) {
    return () => (
      <WelcomLayout>
        {{
          icon: () => <img src={cloud} />,
          title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
            <RouterLink to="/welcome/4">完成</RouterLink>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          </>
        }}
      </WelcomLayout>
    );
  }
})

import { defineComponent, ref } from "vue";
import s from './StartPage.module.scss';
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Center } from "../shared/Center";
import { Navbar } from "../shared/Navbar";

export const StartPage = defineComponent({
  setup(props, context) {
    const onClick = () => {
      console.log('hi')
    }
    return () => (
      <div>
        <Navbar>{
          { default: '山竹记账', icon: <Icon name="menu" class={s.navIcon} /> }
        }</Navbar>
        <Center class={s.mangosteen_wrapper}>
          <Icon name="mangosteen" class={s.mangosteen} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>开始记账</Button>
        </div>
        <FloatButton iconName="add" />
      </div>
    );
  }
})
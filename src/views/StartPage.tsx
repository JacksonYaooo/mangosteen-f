import { Toast } from 'vant';
import { defineComponent, onMounted, ref } from 'vue';
import s from "./StartPage.module.scss";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Center } from "../shared/Center";
import { OverlayIcon } from "../shared/Overlay";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";

export const StartPage = defineComponent({
  setup(props, context) {
    onMounted(() => {
      // Toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   duration: 0
      // });
    })
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Center class={s.mangosteen_wrapper}>
                <Icon name="mangosteen" class={s.mangosteen} />
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始记账</Button>
                </RouterLink>
              </div>
              <RouterLink to="/items/create">
                <FloatButton iconName="add" />
              </RouterLink>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});

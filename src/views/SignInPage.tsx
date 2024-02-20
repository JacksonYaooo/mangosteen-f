import { defineComponent, reactive } from "vue";
import s from "./SignInPage.module.scss";
import { Icon } from "../shared/Icon";
import { MainLayout } from "../layouts/MainLayout";
import { Form, FormItem } from "../shared/Form";
import { Button } from "../shared/Button";
import { validate } from "../shared/validate";

export const SignInPage = defineComponent({
  setup(props, context) {
    const formData = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '请输入正确邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登录',
          icon: () => <Icon name="left" />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <Icon class={s.icon} name="mangosteen" />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem label="邮箱地址" type="text" placeholder="请输入邮箱，点击发送验证码"
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem label="验证码" type="validationCode" placeholder="请输入六位数字"
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem style={{ paddingTop: '96px' }}>
                  <Button>登录</Button>
                </FormItem>
              </Form>
            </div>
          )
        }
      }
      </MainLayout>
    );
  }
})
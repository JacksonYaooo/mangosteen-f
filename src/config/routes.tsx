import { RouteRecordRaw } from "vue-router"
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { First } from "../components/wecome/first";
import { Second } from "../components/wecome/second";
import { Third } from "../components/wecome/third";
import { Forth } from "../components/wecome/forth";
import { welcome } from "../views/welcome";

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar },
  {
    path: '/welcome', component: welcome,
    children: [
      { path: '1', component: First, },
      { path: '2', component: Second, },
      { path: '3', component: Third, },
      { path: '4', component: Forth, },
    ]
  }
]
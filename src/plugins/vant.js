import Vue from 'vue';
import {
  Button,
  Icon,
  Image,
  Divider,
  Toast,
  Dialog,
  Lazyload
} from 'vant';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Toast);
Vue.use(Dialog);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
})

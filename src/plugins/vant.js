import Vue from 'vue';

import {
  Button,
  Icon,
  Image,
  Divider,
  Toast,
  Dialog,
  Lazyload,
  Uploader,
  Notify ,
  Checkbox, CheckboxGroup,
  Switch ,
  Calendar ,
  Swipe, SwipeItem ,
  Popup ,
} from 'vant';
import { Empty } from 'vant';
Vue.use(Switch);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Uploader);
Vue.use(Notify);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Calendar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
Vue.use(Empty)


// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
})

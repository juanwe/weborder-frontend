import { createApp } from 'vue';   // Vue 3 中的 createApp
import App from './App.vue';
import router from './router';

const app = createApp(App);  // 初始化 Vue 实例
app.use(router);             // 使用 Vue Router
app.mount('#app');           // 挂载到 #app 节点

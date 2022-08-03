import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import commons from './utils/common';
import './assets/reset.css';

library.add(fas, fab, far);
dom.watch();

const app = createApp(App);
app.config.globalProperties.$commons = commons;
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount('#app');

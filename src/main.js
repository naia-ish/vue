import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faPenToSquare, faUserSecret } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

/* add icons to the library */
library.add(faPenToSquare,faUserSecret)

createApp(App)
    .use(router, bootstrap)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

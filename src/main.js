import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import en from './translations/en-US.json'
import br from './translations/br.json'
import { createI18n } from "vue-i18n"
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub, faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faGithub, faAngleDoubleLeft, faAngleDoubleRight);

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    messages: {
        en: en,
        br: br
    },
    fallbackLocale: br
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

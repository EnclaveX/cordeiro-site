import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import en from './translations/en-US.json'
import br from './translations/br.json'
import { createI18n } from "vue-i18n"
import router from './router'

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
app.mount('#app')

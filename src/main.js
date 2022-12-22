import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from 'swiper'
import VueSweetalert2 from 'vue-sweetalert2'
import 'swiper/css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'animate.css'
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import 'aos/dist/aos.css'
import './index.css'

import { createHead } from "@vueuse/head"

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(VueSweetalert2)
app.use(Vue3VideoPlayer, {
  lang: 'en'
})
app.use(head)
app.mount('#app')

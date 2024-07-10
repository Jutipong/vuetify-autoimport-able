/* eslint-disable import/order */
import { createApp } from 'vue'

import type { PluginOptions } from 'vue-toastification'
import Toast from 'vue-toastification'

import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@core/router'

import '@/scss/style.scss'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import VueApexCharts from 'vue3-apexcharts'
import VueTablerIcons from 'vue-tabler-icons'

// import SvgSprite from '@/components/shared/SvgSprite.vue'

// google-fonts
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/700.css'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import '@fontsource/public-sans/700.css'

import { fakeBackend } from '@/utils/helpers/fake-backend'
import { piniaConfig } from '@/utils/pinia-config'

const app = createApp(App)
fakeBackend()

app.use(router)
app.use(PerfectScrollbarPlugin)
// app.component('SvgSprite', SvgSprite)
app.use(piniaConfig)
app.use(VueTablerIcons)
app.use(VueApexCharts)
app.use(Toast, {
    transition: 'Vue-Toastification__bounce',
    timeout: 5000,
    maxToasts: 9,
    newestOnTop: true,
} as PluginOptions)
app.use(vuetify).mount('#app')

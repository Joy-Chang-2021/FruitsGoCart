import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { worker } from './mocks/browser'
import './scss/App.scss'

const app = createApp(App)

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

app.use(router)

app.mount('#app')

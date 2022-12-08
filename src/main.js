import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { worker } from './mocks/browser'
import './scss/App.scss'

const app = createApp(App)

if (process.env.NODE_ENV === 'development') {
  worker.start({
    // Specifies how to handle a request that is not listed in the request handlers.
    // ex: GET /src/assets/money.svg
    // ex: GET /src/views/Cart.vue
    onUnhandledRequest: 'bypass'
  })
}

app.use(router)

app.mount('#app')

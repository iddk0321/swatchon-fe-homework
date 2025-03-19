import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/main.scss'
import { VueQueryPlugin, QueryClient} from "@tanstack/vue-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

createApp(App)
  .use(router)
  .use(VueQueryPlugin, { queryClient })
  .mount('#app')

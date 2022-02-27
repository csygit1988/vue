import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/Router'
import TypeNav from "@/components/TypeNav"
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
//引入仓库
import store from '@/store'
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)


new Vue({
    render: h => h(App),
    //注册路由
    router,
    //注册仓库
    store
}).$mount('#app')

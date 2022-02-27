import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//保存vue原型对象的push
let originPush = vueRouter.prototype.push;
let originReplace = vueRouter.prototype.replace;
//重写push/replace
//第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
vueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this,location, () => { }, () => { })
    }
}
vueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        //push方法没有产地第二个参数|第三个参数
        originReplace.call(this,location, () => { }, () => { })
    }
}
export default new vueRouter({
    routes: [{
        path: "/home",
        component: Home,
        // meta路由元信息
        meta: { show: true }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },
        name: "search",
        // props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})
    },
    {
        path: "*",
        redirect: '/home',
    }
    ]
})
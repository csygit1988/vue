import axios from "axios";
import nprogress from 'nprogress';
//import store from "@/store";
//引入进度条样式
import "nprogress/nprogress.css";
//创建axios实例
let requests=axios.create({
   baseURL:"/api",
    timeout:5000
});
console.log(axios);
//请求拦截器
requests.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use(
    (res)=>{
    nprogress.done();
    return res.data;
},(err)=>{
    alert("服务器响应数据失败");
})

export default requests;
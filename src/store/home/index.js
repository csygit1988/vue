import { reqCategoryList, reqGetBannerList,reqGetFloorList } from "@/api";


//home 模块的小仓库
const state = {
    //home仓库中存储三级菜单的数据
    categoryList: [],
    bannerList: [],
    floorList:[],
};
//mutions是唯一修改state的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList;
    },
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
    async categoryList({ commit }) {
        //reqgetCategoryList返回的是一个Promise对象
        //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
        let result = await reqCategoryList();
        if (result.code == 200) {
            // let results=result.data.splice(0,16)
            //console.log(results);
            commit("CATEGORYLIST", result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
         //   console.log(result);
            commit("BANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
         //   console.log(result);
            commit("FLOORLIST", result.data);
        }
    },
};
    const getters = {};
    export default {
        state,
        mutations,
        actions,
        getters
    }
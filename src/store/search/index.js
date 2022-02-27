//search 模块的小仓库
import { reqGetSearchInfo } from "@/api";
const state = {
    searchInfo: {}
};
const mutations = {
    SEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo;
    }
};
const actions = {
    async getSearchInfo({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        //  console.log(result);
        if (result.code == 200) {
            //   console.log(result);
            commit("SEARCHINFO", result.data);
        }
    }
};
const getters = {
       //当前形参state，当前仓库中的state，并非大仓库中的那个state
    goodsList(state) {
        return state.searchInfo.goodsList || [];
    },
    attrsList(state) {
        return state.searchInfo.attrsList || [];
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || [];
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}
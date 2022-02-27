import requests from './ajax';
import mockRequests from './mockAjax'
//TypeNav接口
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}

//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner');
export const reqGetFloorList = () => mockRequests.get('/floor');
export const reqGetSearchInfo = (params) => {
    return requests({ url: '/list', method: 'post', data: params })
}
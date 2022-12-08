import axios from 'axios';
const baseURL = "https://fruits-go/"

export default {
  shopInfoAPI(shopId) {
    // 商店名稱、商店介紹、商品細項
    return axios.get(baseURL + shopId)
  }
} 
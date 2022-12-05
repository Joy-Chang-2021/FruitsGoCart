import axios from 'axios';
const shopInfoURL = "https://mocki.io/v1/a1e8d8cd-a7cf-45a9-ac2b-b977b92368fe"

export default {
  shopInfoAPI() {
    return axios.get(shopInfoURL)
  }
} 
<script setup>
import IndexProducts from "../components/IndexProducts.vue"
import IndexStatement from "../components/IndexStatement.vue"
import IndexFooter from "../components/IndexFooter.vue"
</script>

<template>
  <main class="max-w-screen-lg mx-auto pt-5 px-8">
    <!-- 賣場名稱 -->
    <h2 class="font-bold">{{ shopInfo.name }}</h2>
    <!-- 前往購物車 -->
    <div class="text-right">
      <RouterLink to="/Cart">
        <button class="btn btn-theme text-right">
          購物車
        </button>
      </RouterLink>
    </div>
    <!-- 賣場介紹 -->
    <div class="mb-5">
      <p class="mb-2">賣場說明：</p>
      <p class="max-w-xl">
        <!-- TODO: 處理換行 -->
        {{ shopInfo.description }}
      </p>
    </div>
    <!-- 商品瀏覽模式 -->
    <div class="text-right mb-5">
      <!-- TODO: 加入 select 排列方法 -->
      <button class="btn btn-theme ml-3">搜尋</button>
      <button class="btn btn-theme ml-3">模式</button>
      <button class="btn btn-outline ml-3">模式</button>
    </div> 
    <!-- 商品顯示區 -->
    <IndexProducts />   
  </main>
  <!-- 賣場聲明、頁腳 -->
  <IndexStatement />
  <IndexFooter />
</template>

<script>
import shopAPI from "../apis/shop"

export default {
  data () {
    return {
      shopInfo: {
        name: "賣場名稱",
        description: "賣場介紹"
      }
    }
  },
  methods: {
    async fetchShopInfo(shopId) {
      try {
        const { data, status } = await shopAPI.shopInfoAPI(shopId)
        if (status !== 200) throw new Error()
        const { name, description, products } = data
        this.shopInfo = {
          ...this.shopInfo,
          name,
          description
        }
        console.log(products)
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchShopInfo('shop')
  }
}
</script>
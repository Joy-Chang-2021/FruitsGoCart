<script setup>
import { onMounted } from '@vue/runtime-core'

</script>

<template>
  <!-- 根據api取得所有商品資料、迴圈製成商品卡片 -->
  <div
    v-for="product in allProducts" :key="product.id" 
    class="product-card flex flex-col lg:flex-row mx-auto my-5 max-w-lg lg:max-w-full">
    <!-- 商品圖片 -->
    <div class="py-2 px-5 lg:w-1/4">
      <img :src="product.image" class="w-full h-full" alt="">
    </div>
    <!-- 商品資料 -->
    <div class="p-5 pt-0 lg:pt-5 lg:w-3/4">
      <div class="h-2/3">
        <!-- 商品名稱 -->
        <h3 class="theme-text mb-2 text-2xl">{{ product.name }}</h3>
        <h5 class="mb-2 text-lg">價錢：{{ product.price }} 元</h5>
        <h5 class="mb-2 text-lg">數量：{{ product.quantity }}</h5>
      </div>
      <hr />
      <!-- 購買數量、購買按鈕 -->
      <div class="h-1/3 my-4 lg:my-0 lg:flex lg:items-center">
        <!-- 增加數量 -->
        <button
          class="mr-3 btn-circle btn-outline w-8 h-8"
          @click="++product.cartQuantity"
        >＋</button>
        <!-- 購物車數量 -->
        <span class="mr-3">
          {{ countQuantity(product.cartQuantity, product.quantity) }}
        </span>
        <!-- 減少數量 -->
        <button
          class="mr-3 btn-circle btn-outline w-8 h-8"
          @click="--product.cartQuantity"
        >－</button>
        <!-- 加入購物車/直接結帳 -->
        <button class="mr-3 btn btn-theme">加入購物車</button>
        <button class="mr-3 btn btn-theme">直接結帳</button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
const apiData = [
  {
    id: 31277226,
    name: "電影00",
    image: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    quantity: 5,
    price: 150
  },
  {
    id: 49556142,
    name: "電影01",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    quantity: 5,
    price: 80
  },
  {
    id: 94940209,
    name: "電影02",
    image: "https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    quantity: 5,
    price: 100
  }
]

export default {
  data() {
    return {
      allProducts: null,
    }
  },
  methods: {
    fetchProductsData() {
      this.allProducts = apiData.map(item => {
        return {
          ...item,
          cartQuantity: 1
        }
      })
    },
  },
  computed: {
    countQuantity() {
      return (number, max) => {
        if (number < 1) return 1
        else if (number > max) return max
        else return number
      }
    }
  },
  created() {
    this.fetchProductsData()
  }
}
</script>
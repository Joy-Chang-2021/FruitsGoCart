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
          @click="++product.beforeAddInCart"
        >＋</button>
        <!-- 購物車數量 -->
        <span class="mr-3">
          {{ countBeforeAddInCart(product) }}
        </span>
        <!-- 減少數量 -->
        <button
          class="mr-3 btn-circle btn-outline w-8 h-8"
          @click="--product.beforeAddInCart"
        >－</button>
        <!-- 加入購物車/直接結帳 -->
        <button
          @click="addInCart(product)" 
          class="mr-3 btn btn-theme">加入購物車</button>
        <button
          @click="checkOutCart(product)"
          class="mr-3 btn btn-theme">直接結帳</button>
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
      cartData: {}
    }
  },
  methods: {
    fetchProductsData() {
      this.allProducts = apiData.map(item => {
        return {
          ...item,
          beforeAddInCart: 1
        }
      })
    },
    addInCart(product) {
      // 儲存預計使用的變數資料
      const { id, name, image, beforeAddInCart, price } = product
      // 若購物車內無此品項，加入商品資料
      if (!this.cartData[id]) this.cartData[id] = { 
        id, name, image, 
        cartQuantity: beforeAddInCart,
        price
      }
      // 若購物車內已有此品項，加入新增的數量
      else this.cartData[id].cartQuantity += beforeAddInCart
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartData))
      // 根據已放入購物車的數量，修改商店內的商品庫存量
      product.quantity -= beforeAddInCart
      product.beforeAddInCart = 1
    },
    checkOutCart(product) {
      this.addInCart(product)
      this.$router.push("/cart")
    }
  },
  computed: {
    countBeforeAddInCart() {
      return (product) => {
        // 若庫存量 0，則預計放入購物車的可選擇數量為 0
        if (product.quantity === 0) product.beforeAddInCart = 0
        // 預計放入購物車的可選擇數量，最少為 0
        else if (product.beforeAddInCart < 0) product.beforeAddInCart = 0
        // 計放入購物車的可選擇數量，上限為庫存量
        else if (product.beforeAddInCart > product.quantity) product.beforeAddInCart = max
        // 返回要顯示的「放入購物車的可選擇數量」
        return product.beforeAddInCart
      }
    }
  },
  created() {
    this.fetchProductsData()
  }
}
</script>
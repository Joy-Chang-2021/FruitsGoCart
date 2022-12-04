<script setup>
import CartState from "../components/CartState.vue";
import OrderList from "../components/OrderList.vue";
import OrderShipping from "../components/OrderShipping.vue";
import OrderRecipient from "../components/OrderRecipient.vue";
let shopInfo = {
  name: "賣場名稱",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum."
}
</script>

<template>
  <main class="cart-main-wrapper max-w-screen-lg mx-2 my-2 lg:mx-auto px-2">
    <!-- 賣場名稱 -->
    <h3 class="pt-2 ">{{ shopInfo.name }}</h3>
    <hr />
    <!-- 顯示付帳流程的狀態 -->
    <CartState :checkoutState="checkoutState"/>
    <!-- 顯示付帳的詳細內容 -->
    <div class="order-text flex flex-col mx-2">
      <!-- 商品明細 -->
      <div :class="[{'order-3': checkoutState === 3}]">
        <OrderList :checkoutState="checkoutState"/>
      </div>
      <!-- 取貨資料：付款方式、取貨方式 -->
      <div>
        <OrderShipping :checkoutState="checkoutState"/>
      </div>
      <!-- 訂購人/取貨人資料 -->
      <div :class="[{'hidden': checkoutState === 1}]">
        <OrderRecipient :checkoutState="checkoutState"/>
      </div>
    </div>
    <!-- 上一頁、下一頁：控制付帳流程步驟及狀態 -->
    <div class="py-3 flex justify-center">
      <RouterLink to="/" class="no-underline">
        <button 
          v-show="checkoutState === 1"
          class="btn btn-outline w-24">
          回賣場頁
        </button>
      </RouterLink>
      <button
        v-show="checkoutState === 2"
        @click="--checkoutState"
        class="btn btn-outline w-24">
        回上一步
      </button>
      <button
        v-show="checkoutState < 2"
        @click="++checkoutState"
        class="btn btn-theme ml-3 w-24">
        下一步
      </button>
      <button
        v-show="checkoutState === 2"
        @click="++checkoutState"
        class="btn btn-theme ml-3 w-24">
        送出結帳
      </button>
      <button
        v-show="checkoutState === 3"
        @click="--checkoutState"
        class="btn btn-theme w-24">
        列印本頁
      </button>
    </div>
  </main>
  <!-- 頁腳 -->
  <footer class="mx-2 my-1 text-center">
    <!-- 訂購提醒 -->
    <div class="max-w-screen-lg mx-auto mb-1">
      <div class="theme-background rounded-md">
        訂購提醒
      </div>
      <!-- TODO: 詳細文字的顯示及特效 -->
    </div>
    <!-- 服務條款/禁止和限制商品政策 -->
    <p>
      <span class="theme-text">服務條款</span>
       / 
      <span class="theme-text">禁止和限制商品政策</span>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      checkoutState: 1
    }
  }
}
</script>

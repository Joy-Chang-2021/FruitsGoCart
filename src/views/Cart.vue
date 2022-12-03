<script setup>
import PaymentState from "../components/PaymentState.vue";
import PaymentForm from "../components/PaymentForm.vue"
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
    <PaymentState :checkoutState="checkoutState"/>
    <!-- 顯示付帳的詳細內容 -->
    <PaymentForm :checkoutState="checkoutState"/>
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
        class="btn btn-theme ml-3 w-24">
        送出結帳
      </button>
    </div>
  </main>
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

<template>
  <div class="cart-state-wrapper flex flex-row justify-between text-center m-2 p-2 rounded-md">
    <div :class="[{'hidden': checkoutState === 1},
     {'progressBar': checkoutState === 2},
     {'progressBar final': checkoutState === 3}]"></div>
    <!-- 第一步：確認訂單 -->
    <div :class="[checkoutState === 1 ?
      'cart-state-active' : 'cart-state-completed']">
      <h4 class="cart-state-circle">1</h4>
      <p class="text-xs">確認訂單</p>
    </div>
    <!-- 第二步：填寫付款資料 -->
    <div :class="[
      {'cart-state-default': checkoutState === 1},
      {'cart-state-active': checkoutState === 2},
      {'cart-state-completed': checkoutState === 3}]">
      <h4 class="cart-state-circle">2</h4>
      <p class="text-xs">填寫付款資料</p>
    </div>
    <!-- 第三步：完成訂單 -->
    <div :class="[
      {'cart-state-default': checkoutState !== 3},
      {'cart-state-active': checkoutState === 3}]">
      <h4 class="cart-state-circle">3</h4>
      <p class="text-xs">完成訂單</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkoutState: {
      type: Number,
      require: true
    }
  }
}
</script>
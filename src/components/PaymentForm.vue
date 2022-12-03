<template>
  <div v-show="checkoutState === 1">{{ checkoutState }} 確認訂單</div>
  <div v-show="checkoutState === 2">{{ checkoutState }} 付款資料</div>
  <div v-show="checkoutState === 3">{{ checkoutState }} 完成訂單</div>
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
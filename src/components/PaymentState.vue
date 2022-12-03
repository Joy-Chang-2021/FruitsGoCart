<template>
  {{ checkoutState }}
  1確認訂單
  2填寫付款資料
  3完成訂單
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
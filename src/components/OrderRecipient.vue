<template>
  <div>{{ checkoutState }} 訂購人/收件人資料</div>
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
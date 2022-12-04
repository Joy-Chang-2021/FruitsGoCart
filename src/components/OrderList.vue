<template>
  <div>{{ checkoutState }} 訂單明細</div>
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
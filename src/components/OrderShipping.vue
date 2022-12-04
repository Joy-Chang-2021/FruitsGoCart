<template>
  <div>{{ checkoutState }} 取貨資料</div>
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
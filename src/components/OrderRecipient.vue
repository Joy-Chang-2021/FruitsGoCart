<template>
  <!-- 訂購人資料 - state(2) -->
  <div :class="{'hidden': checkoutState !== 2}">
    <h4 class="orderDone">
      <span class="orderCategory">
        訂購人資料
      </span>
    </h4>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">姓名</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" class="w-full sm:mx-2">
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right sm:px-2">電話</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" class="w-full sm:mx-2">
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">E-mail</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" class="w-full sm:mx-2">
      </p>
    </div>
  </div>
  <!-- 收件人資料 - state(2) +  state(3) -->
  <div>
    <h4 class="orderDone">
      <span class="orderCategory">
        收件人資料
      </span>
    </h4>
    <div :class="['ordering py-1', {'hidden': checkoutState === 3}]">
      <input type="checkbox" id="sameAsOrderingPerson">
      <label for="sameAsOrderingPerson" class="ml-1">同訂購人資料</label>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">姓名</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" :class="['w-full sm:mx-2', {'hidden': checkoutState === 3}]">
        <span :class="['w-full px-2', {'hidden': checkoutState !== 3}]">{{ '姓名 口口口' }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">電話</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" :class="['w-full sm:mx-2', {'hidden': checkoutState === 3}]">
        <span :class="['w-full px-2', {'hidden': checkoutState !== 3}]">{{ '電話 09xxxxxxxx' }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">E-mail</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" :class="['w-full sm:mx-2', {'hidden': checkoutState === 3}]">
        <span :class="['w-full px-2', {'hidden': checkoutState !== 3}]">{{ '信箱 xxx@gmail.com' }}</span>
      </p>
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
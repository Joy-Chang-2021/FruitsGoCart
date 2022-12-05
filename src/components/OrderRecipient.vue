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
        <input type="text" v-model="orderPerson.name" class="w-full sm:mx-2">
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right sm:px-2">電話</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" v-model="orderPerson.phone" class="w-full sm:mx-2">
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">E-mail</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" v-model="orderPerson.email" class="w-full sm:mx-2">
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
      <input
        type="checkbox" id="sameAsOrderingPerson"
        v-model="sameAsOrderingPerson" 
        :true-value="true" :false-value="false">
      <label for="sameAsOrderingPerson" class="ml-1">同訂購人資料</label>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">姓名</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" v-model="recipient.name" :class="['w-full sm:mx-2', {'hidden': checkoutState === 3}]">
        <span :class="['w-full px-2', {'hidden': checkoutState !== 3}]">{{ recipient.name }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">電話</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" v-model="recipient.phone" :class="['w-full sm:mx-2', {'hidden': checkoutState === 3}]">
        <span :class="['w-full px-2', {'hidden': checkoutState !== 3}]">{{ recipient.phone }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">E-mail</p>
      <p class="sm:my-1 sm:w-1/4 flex flex-row justify-between">
        <input type="text" v-model="recipient.email" :class="['w-full sm:mx-2', {'hidden': checkoutState === 3}]">
        <span :class="['w-full px-2', {'hidden': checkoutState !== 3}]">{{ recipient.email }}</span>
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
  },
  data() {
    return {
      orderPerson: {
        // 訂購人資料
        name: "",
        phone: "",
        email: ""
      },
      sameAsOrderingPerson: false, //同訂購人資料
      recipient: {
        // 收件人資料
        name: "",
        phone: "",
        email: ""
      }
    }
  },
  watch: {
    sameAsOrderingPerson: function(newVal) {
      // 監看「同訂購人資料」是否被勾選
      if (newVal) {
        this.recipient = {
          ...this.orderPerson
        }
      } else {
        this.recipient = {
          name: "",
          phone: "",
          email: ""
        }
      }
    }
  }
}
</script>
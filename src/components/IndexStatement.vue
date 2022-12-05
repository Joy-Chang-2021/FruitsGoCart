<script setup>
  import moneyIcon from "../assets/money.svg"
  import dealIcon from "../assets/deal.svg"
  import noteIcon from "../assets/note.svg"
  const statements = [
    {
      key: 0,
      title: "交易安全",
      icon: moneyIcon,
      description: "平台使用SSL安全加密最高等級保障交易安全，不同賣場之購物車恕無法合併結帳"
    },
    {
      key: 1,
      title: "履約交易",
      icon: dealIcon,
      description: "商品配送期間：賣家出貨後，物流配送需3-4個工作天（因離島交通受天候影響大，以實際配送作業為準，不保證到貨時效）。為減少買賣糾紛，買家請務必履行交易，若有多次未取紀錄，賣場管理員將有權移除您的購買資格。"
    },
    {
      key: 2,
      title: "注意事項",
      icon: noteIcon,
      description: "賣貨便不會以電話主動要求您操作「銀行提款機進行轉帳設定」、「取消訂單錯誤金額」、「刷卡扣款問題」，若接獲可疑電話，請盡速透過客服信箱 fruitsgo@fruit.com 或客服專線 (02) 0000-0000 與我們聯繫（週一至週五，09:00~18:00，例假日休息）。"
    },
  ]
</script>

<template>
  <div class="statement-color">
    <div class="max-w-screen-lg mx-auto py-10 flex flex-col items-center lg:flex-row lg:justify-between">
      <div v-for="state in statements" :key="state.key" class="statement-icon-box mx-auto max-w-xl lg:w-4/12 py-5 px-10 flex flex-col items-center self-start">
        <img :src="state.icon" class="w-10 statement-icon my-5">
        <h3 class="text-xl mb-3">{{ state.title }}</h3>
        <p>{{ state.description }}</p>
      </div>
    </div>
  </div>
</template>
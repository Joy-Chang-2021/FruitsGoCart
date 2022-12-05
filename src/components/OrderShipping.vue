<template>
  <!-- state(1): 選擇取貨/付費方法 -->
  <div :class="{'hidden': checkoutState !== 1}">
    <!-- 商品金額 -->
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">小計</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>共計 {{ "2" }} 項</span>
        <span>$ {{ productsCost }}</span>
      </p>
    </div>
    <!-- 取貨方式 -->
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName my-1 sm:w-1/4 text-left sm:text-right px-2">配送方式</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>
          <select v-model="shippingWay" name="" id="">
            <option value="店取：Fruits Go">店取：Fruits Go</option>
            <option value="店到宅：宅配">店到宅：宅配</option>
          </select>
        </span>
        <span>{{ shippingWay }}</span>
      </p>
    </div>
    <!-- 付款方式 -->
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName my-1 sm:w-1/4 text-left sm:text-right px-2">付款方式</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>
          <select v-model="payingWay" name="" id="">
            <option value="取貨付款">取貨付款</option>
            <option value="銀行轉帳">銀行轉帳</option>
            <option value="信用卡">信用卡</option>
          </select>
        </span>
        <span>{{ payingWay }}</span>
      </p>
    </div>
    <!-- 運費 -->
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName my-1 sm:w-1/4 text-left sm:text-right px-2">運費</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>
          基本運費 35 元；宅配運費 99 元
        </span>
        <span>$ {{ shippingFee }}</span>
      </p>
    </div>
    <!-- 總計 -->
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">總計</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>
          <button class="btn btn-theme py-1 px-2">全站運費折抵卷</button>
        </span>
        <span>${{ productsCost + shippingFee }}</span>
      </p>
    </div>
    <!-- 同意條款 -->
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">同意條款</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>
          <input type="checkbox" id="termsOfService" 
            v-model="termsOfService" 
            :true-value="true" :false-value="false">
          <label for="termsOfService">
            我已詳細閱讀並且同意水果購
          </label>
          <a href="" class="no-underline theme-text">服務條款</a>
        </span>
      </p>
    </div>
  </div>
  <!-- state(2): 輸入訂購人/取貨人資料 -->
  <div :class="{'hidden': checkoutState !== 2}">
    <h4 class="orderDone">
      <span class="orderCategory">
        配送及付款方式
      </span>
    </h4>
    <p class="orderDone">
      <span>{{ shippingWay }}</span>
      <span class="mx-24">{{ payingWay }}</span>
      <span>
        <input type="radio" id="checkedTotal" v-model="checkedTotal" value="checked">
        <label for="checkedTotal" class="ml-1">{{ productsCost + shippingFee }}</label>
      </span>
    </p>
  </div>
  <!-- state(3): 完成結帳 -->
  <div :class="{'hidden': checkoutState !== 3}">
    <h4 class="orderDone">
      <span class="orderCategory">
        付款明細 - {{ shippingConclusion }}
      </span>
    </h4>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">訂單編號</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>{{ "CM2212043524697" }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">訂單時間</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>{{ "2022/12/04 09:53" }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">付款方式</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>{{ payingWay }}</span>
      </p>
    </div>
    <div class="ordering flex flex-col sm:flex-row">
      <p class="orderName sm:w-1/4 text-left sm:text-right px-2">訂單金額</p>
      <p class="sm:my-1 sm:w-3/4 flex flex-row justify-between px-2">
        <span>$ {{ productsCost + shippingFee }}</span>
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
      shippingWay: "店取：Fruits Go",
      payingWay: "取貨付款",
      productsCost: 2000, //商品總額 //TODO: 數字暫定,待資料串接
      checkedTotal: "", //input[type="radio"]確認總金額
      termsOfService: false, //input[type="checkbox"]詳閱同意服務條款
    }
  },
  computed: {
    shippingFee() {
      // 依照運送方式、顯示運費
      if (this.shippingWay === "店取：Fruits Go") return 35
      else return 99
    },
    shippingConclusion() {
      // state(3) 付款明細 - 標題文字
      let conclusion = ""
      if (this.shippingWay === "店取：Fruits Go") conclusion += "Fruits Go 商店取貨"
      else if (this.shippingWay === "店到宅：宅配") conclusion += "到宅配送"
      if (this.payingWay === "取貨付款") conclusion += "/取貨付款"
      else if (this.payingWay === "銀行轉帳") conclusion += "/銀行轉帳"
      else if (this.payingWay === "信用卡") conclusion += "/信用卡付款"
      return conclusion
    }
  }
}
</script>
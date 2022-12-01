<script setup>
import Statement from "../components/Statement.vue"
import Footer from "../components/Footer.vue"
let shopInfo = {
  name: "賣場名稱",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum."
}
</script>

<template>
  <main class="max-w-screen-lg mx-auto pt-5">
    <h2 class="font-bold">{{ shopInfo.name }}</h2>
    <div class="text-right">
      <RouterLink to="/Cart">
        <button class="btn btn-theme text-right">
          購物車
        </button>
      </RouterLink>
    </div>
    <div class="mb-5">
      <p class="mb-2">賣場說明：</p>
      <p class="max-w-xl">
        <!-- TODO: 處理換行 -->
        {{ shopInfo.description }}
      </p>
    </div>
    <div class="text-right mb-5">
      <!-- TODO: 加入 select 排列方法 -->
      <button class="btn btn-theme ml-3">搜尋</button>
      <button class="btn btn-theme ml-3">模式</button>
      <button class="btn btn-outline ml-3">模式</button>
    </div>    
  </main>
  <Statement />
  <Footer />
</template>

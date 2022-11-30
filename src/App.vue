<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './scss/App.scss'
</script>

<template>
  <div class="w-80 min-w-full mx-auto">
    <header>
      <div class="max-w-screen-lg mx-auto p-3 flex justify-between">
        <!-- LOGO -->
        <h1>
          Fruits 水果購
        </h1>
        <!--darkMode/登入/註冊 -->
        <div class="flex items-center">
          <img src="/src/assets/darkMode.png" alt="模式" @click="darkMode" class="w-6 cursor-pointer">
          <button class="btn btn-outline ml-3">登入</button>
          <button class="btn btn-theme ml-2">註冊</button>
        </div>
      </div>
    </header>
    <main class="max-w-screen-lg mx-auto">
      <nav>
        <RouterLink to="/">Index</RouterLink>
        <RouterLink to="/Cart">Cart</RouterLink>
      </nav>
      <RouterView />
    </main>
  </div>
  
</template>

<script>
export default {
  methods: {
    darkMode() {
      document.body.classList.toggle("dark-mode")
    } 
  }
}
</script>
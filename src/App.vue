<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './scss/App.scss'
</script>

<template>
  <nav>
    <RouterLink to="/">Index</RouterLink>
    <RouterLink to="/Cart">Cart</RouterLink>
  </nav>
  <RouterView />
</template>

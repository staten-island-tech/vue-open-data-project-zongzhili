<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Leading Causes</RouterLink>
      <RouterLink to="/about">Death by Race</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

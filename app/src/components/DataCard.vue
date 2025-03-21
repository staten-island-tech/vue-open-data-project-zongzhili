<template>
  <router-link :to="dataPath" class="card">
    <h3>{{ data.leading_cause }}</h3>
    <p>Year: {{ data.year }}</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
defineProps({
  data: {
    type: Object,
  },
})
const dataPath = computed(() => {
  return `/data/${props.id}`
})
</script>

<style scoped></style>

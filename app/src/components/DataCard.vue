<template>
  <div class="card">
    <h3>{{ data.leading_cause }}</h3>
    <p>Year: {{ data.year }}</p>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
  },
})
</script>

<style scoped></style>

<!-- <template>
  <router-link :to="dataPath" class="card">
    <h2>{{ data.year }}</h2>
    <h3>{{ id }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  Race_Ethnicity: Object,
  Year: Number,
})
const dataPath = computed(() => {
  return '/pokemon/${props.id}'
})
</script>

<style scoped></style> -->

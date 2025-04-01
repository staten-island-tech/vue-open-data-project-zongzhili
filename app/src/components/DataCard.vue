<template>
  <router-link :to="dataPath" class="card">
    <h2>{{ data.leading_cause }}</h2>
    <p>Year: {{ data.year }}</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
  },
})

const dataPath = computed(() => {
  return `/data/${props.data.leading_cause}`
})
</script>

<style scoped>
.card {
  display: block;
  padding: 16px;
  margin: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: black;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  width: 12%;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  background: #f9f9f9;
}
</style>

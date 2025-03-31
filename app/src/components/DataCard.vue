<template>
  <router-link :to="dataPath" class="card">
    <h3>{{ data.leading_cause }}</h3>
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
  return `/data/${encodeURIComponent(props.data.leading_cause)}`
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
  max-width: 15%;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  background: #f9f9f9;
}

.card h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card p {
  font-size: 14px;
  color: #555;
  margin: 4px;
}
</style>

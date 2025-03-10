<template>
  <div class="container">
    <h1>New York City Leading Causes of Death</h1>
    <div>
      <Card v-for="item in data" :key="item.leading_cause + item.year" :data="item" />
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/DataCard.vue'
import { ref, onMounted } from 'vue'
const data = ref([])
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let results = await res.json()
  data.value = results
  console.log(results)
}
onMounted(() => {
  getData()
})
import { Bar } from 'vue-chartjs'
</script>

<style scoped></style>

<template>
  <div class="container">
    <h1>Home</h1>
    <div>
      <Card v-for="item in death" :key="item.leading_cause + item.year" :data="item" />
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/DataCard.vue'
import { ref, onMounted } from 'vue'

const death = ref([])

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=100')
  let data = await res.json()
  death.value = data
}
onMounted(() => {
  getData()
})
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
}
h1 {
  text-align: center;
}
</style>

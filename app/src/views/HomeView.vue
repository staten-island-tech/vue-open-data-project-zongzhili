<template>
  <div class="container">
    <h1>New York City Leading Causes of Death</h1>
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
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  console.log(data)
  death.value = data
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>

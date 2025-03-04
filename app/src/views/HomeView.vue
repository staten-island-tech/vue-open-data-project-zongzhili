<template>
  <div class="container">
    <h1>New York City Leading Causes of Death</h1>
    <div class="">
      <Card />
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/DataCard.vue'
import { ref, onMounted } from 'vue'
const data = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  pokemon.value = data.results
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>

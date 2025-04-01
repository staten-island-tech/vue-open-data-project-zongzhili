<template>
  <div class="data-path-container">
    <h1>{{ cause }}</h1>
    <p v-if="data">Year: {{ data.year }}</p>
    <p v-if="data">Number of Deaths: {{ data.deaths }}</p>
    <p v-if="data">Sex: {{ data.sex }}</p>
    <p v-if="data">Race/Ethnicity: {{ data.race_ethnicity }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const cause = ref(route.params.leading_cause)
const data = ref(null)

async function getData() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    const rawData = await res.json()

    const filteredData = rawData.find((item) => item.leading_cause === cause.value)

    data.value = filteredData
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped>
.data-path-container {
  padding: 20px;
  text-align: center;
}
</style>

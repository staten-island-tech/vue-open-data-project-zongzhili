<template>
  <div class="container">
    <h1>New York City Leading Causes of Death</h1>
    <div>
      <Card v-for="item in death" :key="item.leading_cause + item.year" :data="item" />
    </div>
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script setup>
import Card from '@/components/DataCard.vue'
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const death = ref([])
const loaded = ref(false)

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Number of Deaths',
      data: [],
      backgroundColor: 'rgba(66, 165, 245, 0.6)',
    },
  ],
})

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  // console.log(data)
  // death.value = data
  const causes = {}

  data.forEach((item) => {
    const cause = item.leading_cause
    if (cause) {
      if (!causes[cause]) {
        causes[cause] = 0
      }
      causes[cause] += parseInt(item.deaths) || 0
    }
  })

  chartData.value.labels = Object.keys(causes)
  chartData.value.datasets[0].data = Object.values(causes)

  loaded.value = true
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>

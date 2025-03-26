<template>
  <div>
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script setup>
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
  death.value = data
  const causes = {}

  data.forEach((item) => {
    const cause = item.leading_cause
    const deaths = +item.deaths

    if (cause && deaths > 0) {
      causes[cause] = (causes[cause] || 0) + deaths
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

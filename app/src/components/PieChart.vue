<template>
  <div class="chart-container">
    <h1>New York City Death By Race</h1>
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

const loaded = ref(false)
const chartData = ref({
  labels: [],
  datasets: [],
})

onMounted(async () => {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    let data = await res.json()

    chartData.value = {
      labels: data.map((item) => item.race_ethnicity),
      datasets: [
        {
          label: 'Deaths',
          data: data.map((item) => item.deaths),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    }

    loaded.value = true
  } catch (e) {
    console.error(e)
  }
})
</script>

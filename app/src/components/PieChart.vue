<template>
  <div class="chart-container">
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const loaded = ref(false)
const chartData = ref({
  labels: [],
  datasets: [],
})

onMounted(async () => {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    let data = await res.json()

    const raceDeaths = {}

    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      const race = item.race_ethnicity
      const deaths = Number(item.deaths)

      if (race && !isNaN(deaths)) {
        if (!raceDeaths[race]) {
          raceDeaths[race] = 0
        }
        raceDeaths[race] += deaths
      }
    }

    const labels = Object.keys(raceDeaths)
    const deathCounts = Object.values(raceDeaths)

    chartData.value = {
      labels: labels,
      datasets: [
        {
          label: 'Deaths',
          data: deathCounts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
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
<style>
.chart-container {
  width: 1000px;
  height: 1000px;
  margin: auto;
}
</style>

<template>
  <div class="about">
    <h1>New York City Death By Race</h1>

    <label for="cause">Select Race: </label>
    <select id="cause" v-model="selectedCause" @change="handleSelectChange">
      <option value="">All Races</option>
      <option v-for="(cause, index) in causesList" :key="index" :value="cause">
        {{ cause }}
      </option>
    </select>

    <PieChart :chartData="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PieChart from '../components/PieChart.vue'

const chartData = ref({
  labels: [],
  datasets: [],
})

const selectedCause = ref('')
const causesList = ref([
  'Hispanic',
  'Asian and Pacific Islander',
  'Not Stated/Unknown',
  'Other Race/ Ethnicity',
  'White Non-Hispanic',
  'Black Non-Hispanic',
])

async function getData(query = '') {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    let data = await res.json()

    const raceDeaths = {}

    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      const race = item.race_ethnicity
      const deaths = +item.deaths

      if (race && deaths > 0 && (!query || race.toLowerCase() === query.toLowerCase())) {
        raceDeaths[race] = (raceDeaths[race] || 0) + deaths
      }
    }

    const labels = []
    const deathCounts = []

    for (let race in raceDeaths) {
      labels.push(race)
      deathCounts.push(raceDeaths[race])
    }

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
  } catch (error) {
    console.error(error)
  }
}
function handleSelectChange() {
  getData(selectedCause.value)
}

onMounted(() => {
  getData()
})
</script>
<style scoped></style>

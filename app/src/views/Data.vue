<template>
  <div class="about">
    <h1>werwerwer</h1>
    <BarChart />
  </div>
</template>

<script>
import BarChart from '../components/PieChart.vue'
export default {
  name: 'App',
  components: { BarChart },
  data() {
    return {
      data: [],
    }
  },
}
</script>
<style scoped></style>

<!-- <template>
  <div>
    <h1>Race</h1>
    <h2>{{ death.leading_cause }}</h2>
    <div>
      <h5 v-for="data in death.race_ethnicity" :key="data.race_ethnicity">{{ data.deaths }}</h5>
    </div>
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

<style scoped></style> -->

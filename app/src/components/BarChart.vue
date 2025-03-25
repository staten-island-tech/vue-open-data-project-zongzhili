<template>
  <div class="chart-container">
    <h1>New York City Death By Race</h1>
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
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

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  async onMounted() {
    this.loaded = false

    try {
      const { res } = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
      let data = await res.json()
      death.value = data

      loaded.value = true
    } catch (e) {
      console.error(e)
    }
  },
}
</script>

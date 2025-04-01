<template>
  <div>
    <Bar :data="chartData" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
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

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.chart-container {
  width: 1000px;
  height: 1000px;
  margin: auto;
}

@media (max-width: 768px) {
  .chart-container {
    width: 100%;
    height: 500px;
  }
}

@media (max-width: 480px) {
  .chart-container {
    width: 100%;
    height: 300px;
  }
}
</style>

<template>
  <div class="chart-container">
    <Pie :data="chartData" />
  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps({
  chartData: {
    type: Object,
  },
})
</script>
<style>
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

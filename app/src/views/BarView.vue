<template>
  <div class="bar-container">
    <h1>New York City Leading Causes of Death</h1>

    <label for="cause">Select Cause: </label>
    <select id="cause" v-model="selectedCause" @change="handleSelectChange">
      <option value="">All Causes</option>
      <option v-for="(cause, index) in causesList" :key="index" :value="cause">
        {{ cause }}
      </option>
    </select>

    <BarChart :chartData="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BarChart from '@/components/BarChart.vue'

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

const selectedCause = ref('')
const causesList = ref([
  'All Other Causes',
  'Diseases of Heart (I00-I09, I11, I13, I20-I51)',
  "Alzheimer's Disease (G30)",
  'Certain Conditions originating in the Perinatal Period (P00-P96)',
  'Chronic Liver Disease and Cirrhosis (K70, K73)',
  'Diabetes Mellitus (E10-E14)',
  'Septicemia (A40-A41)',
  'Viral Hepatitis (B15-B19)',
  'Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)',
])

async function getData(query = '') {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
    let data = await res.json()
    const causes = {}

    data.forEach((item) => {
      const cause = item.leading_cause
      const deaths = +item.deaths

      if (
        cause &&
        deaths > 0 &&
        (!query === '' || cause.toLowerCase().includes(query.toLowerCase()))
      ) {
        causes[cause] = (causes[cause] || 0) + deaths
      }
    })

    let labelsArray = []
    let dataArray = []

    for (let cause in causes) {
      let causeName = cause
      let deaths = causes[cause]

      labelsArray.push(causeName)
      dataArray.push(deaths)
    }
    chartData.value = {
      labels: labelsArray,
      datasets: [
        {
          label: 'Number of Deaths',
          data: dataArray,
          backgroundColor: 'rgba(66, 165, 245, 0.6)',
        },
      ],
    }
  } catch (error) {
    console.error('Error fetching data:', error)
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

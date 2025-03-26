<template>
  <div class="about">
    <h1>New York City Death By Race</h1>
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

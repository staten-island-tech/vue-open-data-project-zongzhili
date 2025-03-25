<template>
  <div class="about">
    <BarChart />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
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

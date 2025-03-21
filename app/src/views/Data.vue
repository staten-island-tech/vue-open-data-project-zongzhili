<template>
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
import { useRoute } from 'vue-router'

const route = useRoute()
const death = ref({})

async function getData() {
  const res = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json${route.params.id}')
  const data = await res.json()
  death.value = data[0]
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>

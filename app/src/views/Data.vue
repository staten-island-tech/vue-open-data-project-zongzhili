<template>
  <div>
    <h2>{{ death.leading_cause }}</h2>
    <div>
      <h5 v-for="stat in death.race_ethnicity" :key="race_ethnicity">{{ death.deaths }}</h5>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json${route.params.id}')
  let data = await res.json()
  death.value = data
}
</script>

<style scoped></style>

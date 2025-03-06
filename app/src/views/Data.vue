<template>
  <div>
    <h2>{{ pokemon.name }}</h2>
    <div class="abilities">
      <h5 v-for="stat in pokemon.stats" :key="stat">{{ stat.base_stat }}</h5>
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
  pokemon.value = data
}
</script>

<style scoped></style>

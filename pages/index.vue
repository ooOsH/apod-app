<script setup lang="ts">
const apod = ref({})

const { data, pending, error } = await useFetch('/api/apod', {
  // server: false, // For testing cached result
})

if (!error.value && data.value) {
  apod.value = data.value
}
</script>

<template>
  <div>
    <h1>APOD App</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>{{ apod }}</div>
  </div>
</template>

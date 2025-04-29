<script setup lang="ts">
const apod = ref({})

const { data, pending, error } = await useFetch('/api/apod', {
  // server: false, // For testing cached result
})

if (!error.value && data.value) {
  apod.value = data.value
}

const formatDate = (value) => {
  const date = new Date(value)
  return date.toLocaleDateString('en-GB', { dateStyle: 'full' })
}
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div v-if="pending" class="text-lg text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-lg text-red-500">
      {{ error.message }}
    </div>
    <div
      v-else
      class="space-y-4 bg-white rounded-2xl shadow-md p-6 max-w-lg mx-auto"
    >
      <NuxtImg
        :src="apod.url"
        :alt="apod.title"
        :title="apod.title"
        class="100vw"
      />
      <h1 class="text-3xl font-bold">{{ apod.title }}</h1>
      <time :datetime="apod.date" class="block text-gray-500">{{ formatDate(apod.date) }}</time>
      <p class="text-sm/6">{{ apod.explanation }}</p>
    </div>
  </section>
</template>

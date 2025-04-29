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
    <div v-if="pending" class="text-lg text-gray-500 text-center">
      Loading Astronomy Picture of the Day...
    </div>
    <div v-else-if="error" class="text-lg text-red-500 text-center">
      Something went wrong! Please try again later 🧑‍🚀<br />
      <small class="text-base text-red-500">{{ error.message }}</small>
    </div>
    <div
      v-else
      class="space-y-4 bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto"
    >
      <NuxtImg
        :src="apod.url"
        :alt="apod.title"
        :title="apod.title"
        class="100vw"
      />
      <h1 class="text-3xl font-bold">{{ apod.title }}</h1>
      <p class="text-gray-500">
        {{ apod.copyright }} -
        <time :datetime="apod.date">{{ formatDate(apod.date) }}</time>
      </p>
      <p class="text-sm/6">{{ apod.explanation }}</p>
    </div>
  </section>
</template>

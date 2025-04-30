<script setup lang="ts">
const apod = ref<Apod | null>(null)

const { data, pending, error } = await useFetch<Apod>('/api/apod', {
  // server: false, // For testing cached result
})

if (!error.value && data.value) {
  apod.value = data.value
}

const formatDate = (value: string) => {
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
      v-else-if="apod"
      class="space-y-4 bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto"
    >
      <div class="relative z-10">
        <picture>
          <source
            v-if="apod?.res?.hdurl"
            :srcset="apod?.res?.hdurl"
            type="image/jpeg"
            media="(dynamic-range: high)"
          />
          <img
            :src="apod?.res?.url"
            :alt="apod?.res?.title"
            class="w-full rounded-xl"
            loading="lazy"
          />
        </picture>
        <div class="absolute right-5 bottom-2 z-20 text-amber-400 font-mono text-sm">
          {{ apod?.timestamp }}
        </div>
      </div>
      <h1 class="text-3xl font-bold">{{ apod?.res?.title }}</h1>
      <p class="text-gray-500">
        {{ apod?.res?.copyright }} -
        <time :datetime="apod?.res?.date">{{ formatDate(apod?.res?.date) }}</time>
      </p>
      <p class="text-sm/6">{{ apod?.res?.explanation }}</p>
    </div>
  </section>
</template>

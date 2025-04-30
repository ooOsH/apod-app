<script setup lang="ts">
const darkMode = useState('darkMode', () => false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  const html = document.documentElement
  html.classList.toggle('dark', darkMode.value)
}

onMounted(() => {
  const html = document.documentElement
  darkMode.value = html.classList.contains('dark')
})

</script>

<template>

  <header class="w-full top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <nav class="flex items-center justify-between">
        <NuxtLink
          to="/"
          title="APOD App"
          class="dark:text-slate-50"
        >
          APOD APP
        </NuxtLink>
        <button
          type="submit"
          class="dark:text-slate-50"
          @click="toggleDarkMode"
        >
          {{ darkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
        </button>
      </nav>
    </div>

  </header>
  <main class="min-h-screen flex justify-center items-center py-5">
    <NuxtPage />
  </main>
</template>

<style>
#__nuxt {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html {
  background-color: theme('colors.slate.200');
}

html.dark {
  background-color: theme('colors.slate.800');
}
</style>

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res = await $fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.NASA_API_KEY}`)
  return res
})

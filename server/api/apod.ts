export default defineCachedEventHandler(async () => {
  const config = useRuntimeConfig()
  const res = await $fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.NASA_API_KEY}`)
  const timestamp = new Date().toLocaleString('en-GB')
  return { res, timestamp }
}, {
  maxAge: 60 * 60 * 12 // Cache for 12 hours
})

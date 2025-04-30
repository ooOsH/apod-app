# APOD App

Apod App is a Nuxt based app with Tailwind to view the Astronomy Picture of the Day from the NASA API

## Setup

### Install the dependencies

```bash
pnpm install
```
I personally use pnpm due to its speed and efficiency but any other package manager could be used just delete the lock file

### Run the app
Rename the env file to get the API key
```bash
sample.env to .env
```

### Development Server
```bash
pnpm dev -o
```

### Production
```bash
pnpm build
```

### Preview Production locally
```bash
pnpm preview
```

## Caching

First time using caching in Nitro - documentation was clear!

I used Nitro's built-in method `defineCachedEventHandler` to cache the API respone, setting the max age parameter to 12 hours for the desired affect. To test its working correctly I used the server false parameter when calling the endpoin via useFetch composable in the view template.

For part of the bonus I realised I could set the timestamp of when the cache was set to return along with the response - tested via closing down the server and starting again to see if it was correct.

## Notes

Edge case - I haven't handled the response if the APOD is a video - I would need to go back into the code and add a condition into the template to render via `media_type`
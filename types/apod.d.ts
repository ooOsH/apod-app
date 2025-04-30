export interface ApodData {
  res: {
    copyright: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: title
    url: string
  }
  timestamp: string
}

// Optional: make it globally available
declare global {
  type Apod = ApodData
}
import { Worker } from 'bullmq'
import Redis from 'ioredis'

const connection = new Redis({
  host: 'localhost', // replace with your Redis server host
  port: 6379, // replace with your Redis server port
  
})

const worker = new Worker('my-queue', async job => {
  console.log('Processing job', job.id, 'with data', job.data)
  // process job here
}, { connection })
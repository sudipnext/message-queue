import { Queue } from 'bullmq'
import Redis from 'ioredis'

const connection = new Redis({
  host: 'localhost', // replace with your Redis server host
  port: 6379 // replace with your Redis server port
})

const newQueue = new Queue('my-queue', { connection })

async function add_ticket_booking_jobs(data) {
    console.log('Adding ticket booking job')
    try{
        await newQueue.add('ticket_booking', data)
    }
    catch (error){
        console.log(error)
    }
}

await add_ticket_booking_jobs("ticket-booking-1",{ticket_id: 1, user_id: 1, quantity: 2, price: 1000, total: 2000, status: 'pending'})
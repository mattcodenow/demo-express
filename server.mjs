import express from 'express'

/* Configure */
const port = process.env.PORT || '8000'


/* Instantiate */
const app = express()


/* App Middleware */

// parse application/json
app.use(express.json())


/* Routes */

// landing route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API.' })
})


/* Listen */
const server = await app.listen(port)
console.log(`listening on http://localhost:${port}`)


/* Graceful Shutdown */

// shutdown signal from process managers
process.on('SIGTERM', async () => {
  console.log('SIGINT signal received: starting graceful shutdown')
  await server.close()
  console.log('http server closed\nexiting...')
})

// shutdown signal from CTRL + C
process.on('SIGINT', async () => {
  console.log('SIGINT signal received: starting graceful shutdown')
  await server.close()
  console.log('http server closed\nexiting...')
})
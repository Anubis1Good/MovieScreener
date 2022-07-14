import express from 'express'
import routes from './routes/routes.js'

const PORT = 5000
const app = express()

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}... `);
})
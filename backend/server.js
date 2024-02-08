// setup express and mongoDB
import app from './app.js'
import './db.js'

// routes
import './routes/auth.js'

app.get('/', async (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
import express from 'express'
import cors from 'cors'

import { Low, JSONFile } from 'lowdb'

const app = express()
app.use(cors())
app.use(express.json())

const adapter = new JSONFile('./api/db.json')
const db = new Low(adapter)
await db.read()

const { counters } = db.data

app.get('/counters/:id', async (req, res) => {
  const counter = counters.find((p) => p.id === req.params.id)
  res.json(counter)
})

app.get('/counters', async (req, res, next) => {
  res.json(counters)
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})

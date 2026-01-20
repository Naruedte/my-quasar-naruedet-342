import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())

const logDir = 'logs'
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir)

app.get('/api/demo', (req, res) => {
  fs.appendFileSync(`${logDir}/access.log`, `${new Date().toISOString()} demo\n`)
  res.json({ message: 'API is working' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error' })
})

app.listen(3000)

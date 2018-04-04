import express from 'express'

import config from './config'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'ok' })
})

app.get('/api/v1', (req, res) => {
    const sum = add(2, 3)
    res.status(200).json(sum)
})

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})
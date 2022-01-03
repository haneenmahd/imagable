import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
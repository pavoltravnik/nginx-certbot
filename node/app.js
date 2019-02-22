// Source: https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000

app.get('/api/a', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

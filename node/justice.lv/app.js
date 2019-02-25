// Source: https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3001

app.get('/api/a', (req, res) => res.send('Justice.lv!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

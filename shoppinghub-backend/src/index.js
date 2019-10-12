const express = require("express")
require('./db/mongoose')

var cors = require('cors');

const app = express()
const port  = process.env.port
const signuproutes = require('./routers/signRoute')



app.use(cors());
app.use(express.json())
app.use(signuproutes)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
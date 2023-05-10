require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/vehicalRoutes')
const app = express()

app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.port, () => {
        console.log('successfully connected with database and listning to port 4000')
    })
})
.catch((error) => {
    console.log(error)
})

app.use('/vehical', router)


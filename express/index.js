const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// middleware
app.use(cors())
app.use(morgan('dev'))

// routes
app.use('/contador', require('./routes/contador.routes'))

app.use((req, res) => {
    res.sendStatus(404)
})

// config
app.listen(4000, () => {
    console.log('Servidor en el puerto 4000');
});

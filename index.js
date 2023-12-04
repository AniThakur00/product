require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
//My Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')
const stripeRoute = require('./routes/stripePayment')
//MiddleWares
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())


//Database Connection
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("Database Connected")
  }).catch(() => {
    console.log("Error Connecting to Database")
  })


app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Woah product is working"
  })
})

//My Routes
app.use('/product', authRoutes)
app.use('/product', userRoutes)
app.use('/product', categoryRoutes)
app.use('/product', productRoutes)
app.use('/product', orderRoutes)
app.use('/product', stripeRoute)



//Port Number and Starting The Server
const port = 3000 || process.env.PORT
app.listen(port, () => {
  console.log(`Server Started on ${port}`)
})
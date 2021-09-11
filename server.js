require('dotenv').config({path:"./config.env"})
const express = require('express')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')


//connectDB
connectDB();

const app = express();

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

//Error unhandler(should be last piece of middleware)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>console.log(`Server running on port http://localhost:${PORT}`))


process.on('unhandleRejection', (err,promise) =>{
  console.log(`Logged Error:${err}`)
  server.close(()=>process.exit(1))
})

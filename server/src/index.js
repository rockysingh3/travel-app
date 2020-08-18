const express = require("express");
const morgan = require("morgan");
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')


// reads the everment varibles you set up in .env (dotenv)
require('dotenv').config();


// error handling for express
const middlewares = require('./middlewares')

// require in the routes folder 
const logs = require('./api/logs')




const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(morgan('common'))
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))
app.use(express.json())


app.get('/', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

app.use('/api/logs', logs)


app.use(middlewares.notFound)
app.use(middlewares.errorHandler)





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running`);
});

require('dotenv').config();
const express =  require('express'),
      cors   =  require('cors'),
      morgan = require('morgan'),
      bodyParser =  require('body-parser'),
      app  =  express();


const {errorsHandler} = require('./handlers/error')
const UserRoutes = require('./routes/user')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use(errorsHandler)

app.use('/api', {UserRoutes})

app.use(function(req,res,next){
      let err = new Error('not found')
      err.status = 404
      next(err)
})


app.listen(5000, ()=>{
          console.log('done')
      })
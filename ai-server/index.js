require('dotenv').config();
const express =  require('express'),
      cors   =  require('cors'),
      morgan = require('morgan'),
      bodyParser =  require('body-parser'),
      app  =  express();


const errorHandler = require('./handlers/error')
const UserRoutes = require('./routes/user')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(express.static('public/resume'))




app.use('/api', UserRoutes)

app.use(function(req,res,next){
      let err = new Error('not found')
      err.status = 404
      next(err)
})
app.use(errorHandler)


app.listen(5000, ()=>{
          console.log('done')
      })
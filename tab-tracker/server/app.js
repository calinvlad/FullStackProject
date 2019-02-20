const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = 8081
const {sequelize} = require('./models')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.post('/register', (req, res) => {
  res.send({ message: 'Hello on port: ' + port,
             response: `Your user was registered as: ${req.body.email}`})
})

sequelize.sync({force: false}) 
  .then(() => {
    app.listen(port, () => {
      console.log('You are on port ' + port)
    })
  })

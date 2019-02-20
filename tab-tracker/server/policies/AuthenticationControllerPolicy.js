const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error, value } = Joi.validate(req.body, schema)
    if(error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email adress'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                    <br>
                    1. It must contain the following characters: lowercase, UPPERCASE, numbers;
                    <br>
                    2. It must be at least 8 characters long but not over 32`
          })
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    }
    else {
      next()
    }
  }
}
const {History, Song, User} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ],
        order: [
          ['createdAt', 'DESC']
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(_.uniqBy (histories, history => history.SongId))
    }
    catch(err) { 
      res.status(500).send({
        error: 'Something is wrong while trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      console.log('User: ',req.user)
      console.log('UserID: ',userId)
      console.log('UserID: ',userId)
      console.log('UserID: ',userId)
      const {songId} = req.body
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    }
    catch(err) { 
      res.status(500).send({
        error: 'Something is wrong while trying to create the history'
      })
    }
  },
}

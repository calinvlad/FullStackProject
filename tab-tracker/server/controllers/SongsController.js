const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    }
    catch(err) {
      res.status(400).send({
        error: 'Something is wrong while fetching the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    }
    catch(err) {
      res.status(400).send({
        error: 'Something is wrong while creating the song'
      })
    }
  }
}
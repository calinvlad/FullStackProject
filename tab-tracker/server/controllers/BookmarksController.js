const {Bookmark, Song, User} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      // const userId = req.user.id
      // const songId = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [ 
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
    }
    catch(err) { 
      res.status(500).send({
        error: 'Something is wrong while trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          UserId: userId,
          SongId: songId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have this stored as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    }
    catch(err) { 
      res.status(500).send({
        error: 'Something is wrong while trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const userId = req.user.id 
      const {bookmarkId} = req.params
      console.log(req.params)
      console.log(req.params)
      console.log(req.params)
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId 
        }
      })
      if(!bookmark) {
         res.status(403).send({
           error: 'You do not have access to this bookmark'
         })
      }
      await bookmark.destroy()
      res.send(bookmark)
    }
    catch(err) { 
      res.status(500).send({
        error: 'Something is wrong while trying to delete the bookmark'
      })
    }
  },
}

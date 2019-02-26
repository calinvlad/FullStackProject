<template>
  <panel title="Song Metadata">
    <v-layout class="height">
      <v-flex xs6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>

        <v-btn
        class="cyan" dark
        :to="{
          name: 'song-edit',
          params () {
            return {
              songId: song.id
            }
          }
        }"
        >Edit</v-btn>
        <v-btn
        v-if="isUserLoggedIn && !bookmark"
        class="cyan" dark
        @click="setAsBookmark"
        >Bookmark</v-btn>
        <v-btn
        v-if="isUserLoggedIn && bookmark"
        class="cyan" dark
        @click="unsetAsBookmark"
        >Unbookmark</v-btn>
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" class="album-image">
        <br>
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: ['song'],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
          // userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
  }
}
</script>

<style lang="sass" scoped>
.height
  height: 400px
  display: flex
  justify-content: center
  align-items: center

.album-image
  width: 70%
  // height: 70%
  margin: 0 auto

.song
  padding: 20px
  height: 330px
  overflow: hidden
  &-title
    font-size: 30px
  &-artist
    font-size: 24px
  &-genre
    font-size: 24px
</style>

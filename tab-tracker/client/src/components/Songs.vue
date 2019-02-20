<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          :to="{name: 'create-song'}"
          fab
          class="cyan"
          dark
          medium
          absolute right middle>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song"
        v-for="song in songs" :key="song.id">
          <v-layout>
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
              :to="{name: 'song', params: {songId: song.id}}"
              class="cyan" dark>
              Register
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img :src="song.albumImageUrl" class="album-image">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>

  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // Do a request to the backend to all the songs
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
  }
}
</script>

<style lang="sass" scoped>
.album-image
  // width: 70%
  // height: 100%
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

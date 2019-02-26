<template>
  <v-layout>
    <v-flex xs6 class="mr-2" v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex>
    <v-flex :class="{
      xs12: !isUserLoggedIn,
      xs6: isUserLoggedIn
    }">
      <songs-search-panel/>
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style lang="sass" scoped>
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

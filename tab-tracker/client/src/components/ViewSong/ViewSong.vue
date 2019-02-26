<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <youtube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :tabs="song.tab"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata.vue'
import Youtube from '@/components/ViewSong/Youtube.vue'
import Lyrics from '@/components/ViewSong/Lyrics.vue'
import Tab from '@/components/ViewSong/Tab.vue'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  }
}
</script>

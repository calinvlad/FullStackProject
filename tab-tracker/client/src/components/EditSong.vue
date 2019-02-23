<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
        label="Title*"
        :rules="[rules.required]"
        v-model="song.title">
        </v-text-field>
        <v-text-field
        label="Artist*"
        :rules="[rules.required]"
        v-model="song.artist">
        </v-text-field>
        <v-text-field
        label="Genre*"
        :rules="[rules.required]"
        v-model="song.genre">
        </v-text-field>
        <v-text-field
        label="Album*"
        :rules="[rules.required]"
        v-model="song.album">
        </v-text-field>
        <v-text-field
        label="Album Image Url*"
        :rules="[rules.required]"
        v-model="song.albumImageUrl">
        </v-text-field>
        <v-text-field
        label="Youtube ID*"
        :rules="[rules.required]"
        v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-textarea
        label="Tab*"
        :rules="[rules.required]"
        multi-line
        v-model="song.tab">
        </v-textarea>
        <v-textarea
        label="Lyrics*"
        :rules="[rules.required]"
        multi-line
        v-model="song.lyrics">
        </v-textarea>
      </panel>

      <div class="danger-alert mt-2" v-if="error">
        {{ error }}
      </div>

      <v-btn
      dark
      class="cyan mt-2"
      @click="save">
        Save Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      rules: {
        required: (value) => !!value || 'required'
      },
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async save () {
      console.log('Save was clicked')
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }

        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
      // console.log(song)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

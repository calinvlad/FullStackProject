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
        @click="navigateTo ({
          name: 'song-edit',
          params: {
            songId: song.id
          }
        })"
        >Edit</v-btn>
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
import Panel from '@/components/Panel'
export default {
  props: ['song'],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
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

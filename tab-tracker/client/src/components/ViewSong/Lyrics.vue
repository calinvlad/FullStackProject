<template>
  <panel title="Lyrics">
    <textarea
    readonly
    v-model="lyrics">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: ['lyrics'],
  components: {
    Panel
  }
}
</script>

<style lang="sass" scoped>
textarea
  width: 100%
  height: 400px
  font-family: monospace
  border-style: none
  border-color: transparent
  padding: 40px
</style>

<template>
  <panel title="Lyrics">
    <textarea
    readonly
    v-model="lyrics">
    </textarea>
  </panel>
</template>

<script>
export default {
  props: ['lyrics']
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

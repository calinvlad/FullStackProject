<template>
  <panel title="Tabs">
    <textarea
    readonly
    v-model="tabs">
    </textarea>
  </panel>
</template>

<script>
export default {
  props: ['tabs']
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

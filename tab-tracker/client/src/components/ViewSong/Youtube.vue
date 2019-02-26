<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="600"
      :player-heigh="325">

    </youtube>
  </panel>
</template>

<script>
export default {
  props: ['youtubeId']
}
</script>

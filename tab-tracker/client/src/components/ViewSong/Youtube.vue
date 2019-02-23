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
import Panel from '@/components/Panel'

export default {
  props: ['youtubeId'],
  components: {
    Panel
  }
}
</script>

<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'home'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>

  <!-- IMPLEMENT ME -->
    <!-- <v-toolbar-items>
      <v-btn flat dark class="cyan">
        Browser
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn flat dark :to="{name: 'register'}">
        SignUp
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>

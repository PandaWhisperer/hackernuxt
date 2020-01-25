<template>
  <v-app dark>
    <Toolbar />

    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'

export default {
  components: { Toolbar }
}
</script>

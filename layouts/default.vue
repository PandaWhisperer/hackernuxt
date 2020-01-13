<template>
  <v-app dark>
    <toolbar />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <app-footer />
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'
import AppFooter from '~/components/Footer.vue'

export default {
  components: {
    Toolbar, AppFooter
  },
}
</script>

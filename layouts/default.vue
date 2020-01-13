<template>
  <v-app dark>
    <toolbar />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020 Christoph Wagner</span>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar.vue'

export default {
  components: { Toolbar },
}
</script>

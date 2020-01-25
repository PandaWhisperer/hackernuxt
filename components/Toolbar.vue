<template>
  <div>
    <drawer :visible="drawer"/>

    <v-app-bar dense fixed app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <nuxt-link to="/" tag="v-toolbar-title">
        {{ title }}
      </nuxt-link>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from '~/components/Drawer.vue'

export default {
  components: {
    Drawer
  },
  data () {
    return {
      drawer: false,
      title: 'HackerNews'
    }
  }
}
</script>

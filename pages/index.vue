<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <items/>
    </v-flex>
  </v-layout>
</template>

<script>
import Items from '~/components/Items.vue'

export default {
  components: {
    Items
  },
  async fetch({ store, params }) {
    await store.dispatch('loadItems')
  }
}
</script>

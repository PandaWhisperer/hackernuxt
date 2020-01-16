<template>
  <v-row>
    <v-col xs="12" sm="5" md="4">
      <stories/>
    </v-col>
    <v-col xs="12" sm="7" md="8">
      <story/>
    </v-col>
  </v-row>
</template>

<script>
import Stories from '~/components/Stories.vue'
import Story from '~/components/Story.vue'

export default {
  components: {
    Stories, Story
  },
  async fetch({ store, params }) {
    if (store.state.stories.length === 0) {
      await store.dispatch('loadStories')
    }
    await store.dispatch('loadStory', params.id)
  }
}
</script>

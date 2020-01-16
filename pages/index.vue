<template>
  <v-row>
    <v-col xs="12" sm="5" md="4">
      <stories :stories="stories"/>
    </v-col>
    <v-col xs="12" sm="7" md="8">
      <v-card>
        <v-card-title>
          Nothing selected.
        </v-card-title>
        <v-card-text>
          Click an article on the right to read something.
        </v-card-text>
      </v-card>
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

  computed: {
    stories() {
      return this.$store.state.stories
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('loadStories', params.stories)
  },

  validate({ params }) {
    return !params.stories || /top|new|best/.test(params.stories)
  }
}
</script>

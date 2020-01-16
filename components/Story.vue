<template>
  <v-card v-if="story">
    <v-card-title>
      {{ story.title }}
    </v-card-title>
    <v-card-subtitle>
      By {{ story.by }}<br/>
      Posted on {{ story.date.toDateString() }}<br/>
      Comments: {{ story.descendants }}
    </v-card-subtitle>
    <v-card-text>
      <a :href="story.url" target="_blank">{{ story.url }}</a>
    </v-card-text>
  </v-card>

  <v-card v-else>
    <v-card-title>
      Nothing selected.
    </v-card-title>
    <v-card-text>
      Click an article on the right to read something.
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    story() {
      return this.$store.state.current
    }
  }
}
</script>

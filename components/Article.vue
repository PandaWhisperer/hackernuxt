<template>
  <v-card v-if="item">
    <v-card-title>
      {{ item.title }}
    </v-card-title>
    <v-card-subtitle>
      Posted on {{ new Date(item.pubDate).toDateString() }}
    </v-card-subtitle>
    <v-card-text>
      <a :href="item.link" target="_blank">{{ item.link }}</a>
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
    item() {
      return this.$store.state.current
    }
  }
}
</script>

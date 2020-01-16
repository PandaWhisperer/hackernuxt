<template>
  <v-card v-if="item">
    <v-card-title>
      {{ item.title }}
    </v-card-title>
    <v-card-subtitle>
      By {{ item.by }}<br/>
      Posted on {{ item.date.toDateString() }}<br/>
      Comments: {{ item.descendants }}
    </v-card-subtitle>
    <v-card-text>
      <a :href="item.url" target="_blank">{{ item.url }}</a>
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

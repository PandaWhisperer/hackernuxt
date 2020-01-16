<template>
  <v-card tile flat :loading="loading">
    <v-card-subtitle>
      <strong>{{ comment.by }} said</strong>
      {{ $timeAgo(comment.date) }}
    </v-card-subtitle>
    <v-card-text v-html="comment.text"/>
    <v-card-actions v-if="comment.kids">
      <v-btn text @click="loadMore">more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  props: {
    comment: Object
  },
  methods: {
    loadMore() {
      this.loading = true

      // this.$store.dispatch('loadComments', this.comment.id)

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

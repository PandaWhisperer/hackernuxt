<template>
  <v-card tile flat :loading="loading">
    <v-card-subtitle>
      <strong>{{ comment.by }} said</strong>
      {{ $timeAgo(comment.date) }}
    </v-card-subtitle>

    <v-card-text>
      <div v-html="comment.text"/>

      <div v-if="comment.children" class="indent">
        <comment
          v-for="child in comment.children"
          :comment="child"
          :key="child.id"
        />
      </div>
    </v-card-text>

    <v-card-actions v-if="comment.kids && !comment.children">
      <v-btn text @click="loadMore">more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
  .indent {
    border-left: 10px solid gray;
  }
</style>

<script>
export default {
  name: 'comment',
  data: () => ({
    loading: false
  }),
  props: {
    comment: Object
  },
  methods: {
    async loadMore() {
      this.loading = true
      await this.$store.dispatch('loadComments', this.comment.id)
      this.loading = false
    }
  }
}
</script>

<template>
  <v-card flat outline tile :loading="loading">
    <v-card-text v-if="story.text" v-html="story.text"/>
    <v-card-text v-else-if="article" v-html="article.content"/>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: true,
    article: null
  }),
  props: {
    story: Object
  },
  methods: {
    async fetchArticle(url) {
      if (!this.story.text) {
        this.article = await this.$axios.$get(`/api/article?url=${url}`)
        this.loading = false
      }
    }
  },
  mounted() {
    this.fetchArticle(this.story.url)
  }
}
</script>

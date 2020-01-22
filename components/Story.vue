<template>
  <div>
    <v-card v-if="story">
      <v-card-title>
        {{ story.title }}
      </v-card-title>

      <v-card-subtitle>
        <strong>{{ story.by }}</strong>
        posted {{ $timeAgo(story.date) }}<br/>

        <v-icon>mdi-external-link</v-icon>
        <a :href="story.url" target="_blank">{{ story.url }}</a><br/>

        <v-icon>mdi-external-link</v-icon>
        <a :href="urlFor(story)" target="_blank">{{ urlFor(story) }}</a><br/>

        <v-icon>mdi-comments-text</v-icon>
        {{ story.descendants }} Comments
      </v-card-subtitle>

      <v-tabs centered v-model="tab">
        <v-tab @click="fetchArticle(story.url)">Article</v-tab>
        <v-tab>Comments</v-tab>
      </v-tabs>
    </v-card>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card>
          <v-card-text v-if="story.text" v-html="story.text"/>
          <v-card-text v-else-if="article" v-html="article.content"/>
          <v-progress-circular v-else indeterminate color="primary"/>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <comment
          v-for="comment in story.children"
          :comment="comment"
          :key="comment.id"
        />
        <v-card v-if="!story.children || story.children.length === 0">
          <v-card-text>
            No comments... yet.
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<style>
  .v-card {
    margin-bottom: 5px;
  }
</style>

<script>
import Comment from '~/components/Comment.vue'

export default {
  components: {
    Comment
  },
  data: () => ({
    article: null,
    tab: 1
  }),
  props: {
    story: Object
  },
  methods: {
    async fetchArticle(url) {
      if (!this.article)
        this.article = await this.$axios.$get(`/api/article?url=${url}`)
    },
    urlFor({ id }) {
      return `https://news.ycombinator.com/item?id=${id}`
    }
  }
}
</script>

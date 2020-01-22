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
        <v-tab>Article</v-tab>
        <v-tab>Comments</v-tab>
      </v-tabs>
    </v-card>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Article :story="story"/>
      </v-tab-item>

      <v-tab-item>
        <Comment
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
import Article from '~/components/Article.vue'
import Comment from '~/components/Comment.vue'

export default {
  components: {
    Article, Comment
  },
  data: () => ({
    tab: 1
  }),
  props: {
    story: Object
  },
  methods: {
    urlFor({ id }) {
      return `https://news.ycombinator.com/item?id=${id}`
    }
  }
}
</script>

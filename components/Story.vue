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

      <v-card-text v-html="story.text"/>
    </v-card>

    <comment
      v-for="comment in story.children"
      :comment="comment"
      :key="comment.id"
    />
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

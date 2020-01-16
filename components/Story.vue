<template>
  <div v-if="story">
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
      <v-card-text>
      </v-card-text>
    </v-card>

    <comment
      v-for="comment in comments"
      :comment="comment"
      :key="comment.id"
    />
  </div>

  <div v-else>
    <v-card>
      <v-card-title>
        Nothing selected.
      </v-card-title>
      <v-card-text>
        Click an article on the right to read something.
      </v-card-text>
    </v-card>
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
  computed: {
    story() {
      return this.$store.state.current
    },
    comments() {
      return this.$store.state.current.kids
    }
  },
  methods: {
    urlFor({ id }) {
      return `https://news.ycombinator.com/item?id=${id}`
    }
  }
}
</script>

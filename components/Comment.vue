<template>
  <v-card>
    <v-card-subtitle>
      <strong>{{ comment.by }} said</strong>
      {{ timeago }}
    </v-card-subtitle>
    <v-card-text v-html="comment.text"/>
  </v-card>
</template>

<script>
import { format } from 'timeago.js'

export default {
  props: {
    comment: Object
  },
  computed: {
    timeago() {
      return format(this.comment.date)
    }
  }
}
</script>

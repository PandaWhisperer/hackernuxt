<template>
  <v-card flat outline tile :loading="loading">
    <v-card-subtitle>
      <strong>{{ comment.by }} said</strong>
      {{ $timeAgo(comment.date) }}
    </v-card-subtitle>

    <v-card-text>
      <div v-html="comment.text"/>

      <div v-if="children && children.length > 0" class="indent">
        <comment
          v-for="child in children"
          :comment="child"
          :key="child.id"
        />
      </div>
    </v-card-text>

    <v-card-actions v-if="comment.kids && children.length == 0">
      <v-btn text @click="expand">more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
  .indent {
    border-left: 10px solid gray;
  }
</style>

<script>
import { getChildren } from '~/lib/hackernews'

export default {
  name: 'comment',
  data: () => ({
    loading: false,
    children: []
  }),
  props: {
    comment: Object
  },
  methods: {
    async expand() {
      this.loading = true
      this.children = await getChildren(this.comment)
      this.loading = false
    }
  }
}
</script>

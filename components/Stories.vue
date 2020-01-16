<template>
  <v-list-item-group>
    <v-list-item
      v-for="story in stories"
      :key="story.id"
      :to="`/stories/${story.id}`"
      two-line
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ story.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          By {{ story.by }},
          {{ $timeAgo(story.date) }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
export default {
  computed: {
    stories() {
      return this.$store.state.stories
    }
  }
}
</script>

<template>
  <v-card>
    <v-list-item-group>
      <v-list-item
        v-for="story in stories"
        :key="story.id"
        :to="`/stories/${story.id}`"
        nuxt
        two-line
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ story.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong>{{ story.by }}</strong>,
            {{ $timeAgo(story.date) }},
            {{ story.descendants }} comments
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text>
            {{ story.score }}
          </v-list-item-action-text>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
export default {
  props: {
    stories: Array
  }
}
</script>

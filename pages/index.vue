<template>
  <v-row>
    <v-col xs="12" sm="5" md="4">
      <items/>
    </v-col>
    <v-col xs="12" sm="7" md="8">
      <article-view/>
    </v-col>
  </v-row>
</template>

<script>
import Items from '~/components/Items.vue'
import ArticleView from '~/components/Article.vue'

export default {
  components: {
    Items, ArticleView
  },
  async fetch({ store, params }) {
    await store.dispatch('loadItems')
  }
}
</script>

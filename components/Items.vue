<template>
  <v-list-item-group>
    <v-list-item v-for="item in items" :key="item.id" two-line>
      <v-list-item-content @click="selectItem(item)">
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ new Date(item.pubDate).toDateString() }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    selectItem(item) {
      this.$store.commit('setCurrent', item)
    }
  }
}
</script>

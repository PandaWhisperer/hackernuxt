<template>
  <v-navigation-drawer v-model="visible" fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  data () {
    return {
      items: [
        {
          icon: 'mdi-newspaper',
          title: 'New Stories',
          to: '?new'
        },
        {
          icon: 'mdi-fire',
          title: 'Top Stories',
          to: '?top'
        },
        {
          icon: 'mdi-seal',
          title: 'Best Stories',
          to: '?best'
        }
      ],
    }
  }
}
</script>

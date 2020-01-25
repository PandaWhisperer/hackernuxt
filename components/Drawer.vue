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
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>

      <v-subheader>Settings</v-subheader>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-brightness-6</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Dark Mode
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="$vuetify.theme.dark"></v-switch>
        </v-list-item-action>
      </v-list-item>

      <v-subheader>About</v-subheader>
      <v-list-item>
        <v-list-item-content>
          &copy; 2020 Christoph Wagner
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

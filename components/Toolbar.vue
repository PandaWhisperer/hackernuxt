<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app>
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

    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <nuxt-link to="/" tag="v-toolbar-title">
        {{ title }}
      </nuxt-link>

      <v-spacer />

      <v-btn icon @click="toggleDarkMode">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-newspaper',
          title: 'New Stories',
          to: '/new'
        },
        {
          icon: 'mdi-fire',
          title: 'Top Stories',
          to: '/top'
        },
        {
          icon: 'mdi-seal',
          title: 'Best Stories',
          to: '/best'
        }
      ],
      title: 'HackerNews'
    }
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<template>
  <v-footer app>
    <span>&copy; 2020 Christoph Wagner</span> |
    <span>Made with Vue.js, Vuetify, and Nuxt.</span>
  </v-footer>
</template>

<style>
  span:first-child {
    margin-right: .5rem;
  }
  span:last-child {
    margin-left: .5rem;
  }
</style>

<script>
  export default {
    data: () => ({
      links: [
        { title: 'Vue.js', url: 'https://vuejs.org/' },
        { title: 'Vuetify', url: 'https://vuetifyjs.com/en/' },
        { title: 'Nuxt', url: 'https://nuxtjs.org/' }
      ]
    })
  }
</script>

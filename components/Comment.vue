<template>
  <v-card>
    <v-card-subtitle>{{ comment.by }} says:</v-card-subtitle>
    <v-card-text v-html="comment.text"/>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: Object
  }
}
</script>

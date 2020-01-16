<template>
  <v-card>
    <v-card-subtitle>
      <strong>{{ comment.by }} says</strong>
    </v-card-subtitle>
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

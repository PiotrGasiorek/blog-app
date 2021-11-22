<template>
  <button v-if="type === 'button'">Remove post</button>
  <a 
    v-else 
    :href="'blogpost/' + postId"
  >Read more</a>
</template>

<script>
export default {
  name: 'PostDeleteButton',
  props: {
    text: String,
    href: String,
    postId: Number,
    type: {
      default: "button",
      type: String,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>
  <button v-if="type === 'button'">Remove post</button>
  <router-link 
    v-else 
    :to="{ 
      name: 'Post', 
      params: { id: postId }
    }"
  >Read more</router-link>
</template>

<script>
export default {
  name: 'PostDeleteButton',
  props: {
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
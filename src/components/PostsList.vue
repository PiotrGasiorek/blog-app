<template>
  <div>
    <PostCard 
      v-for="post in this.$store.getters.getPosts" 
      v-bind:key="post.id" 
      v-bind:post="post"
    />
  </div>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
  name: 'BlogPosts',
  components: {
    PostCard
  },
  mounted() {
    this.$store.dispatch('getBlog');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>
  <div>
    <Post 
      v-for="post in this.$store.getters.getPosts" 
      v-bind:key="post.id" 
      v-bind:post="post"
    />
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'BlogPosts',
  components: {
    Post
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('setPosts');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
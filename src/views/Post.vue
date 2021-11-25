<template>
  <h1 v-if='this.$store.state.loading'>Loading post</h1>
  <div v-else-if="this.$route.params.id == this.$store.state.currentPost[0].id" v-for="post in this.$store.state.currentPost" v-bind:key="post.id">
    <h1>{{ post.title }}</h1>
    <small>{{ post.date }}</small>
    <PostAuthor v-bind:author="post.author"/>
    <p>{{ post.paragraph }}</p>
    <img src="" alt="">
  </div>
</template>

<script>
import PostAuthor from '../components/PostAuthor.vue';

export default {
  name: 'PostPage',
  components: {
    PostAuthor
  },

  methods: {
    getPost(id) {
      return this.$store.dispatch('getPost', id);
    },
  }, 

  mounted() {
    this.getPost(this.$route.params.id);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

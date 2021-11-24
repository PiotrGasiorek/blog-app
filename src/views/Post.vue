<template>
    <div>
      <img src="" alt="">
    </div>
    <div>
      <PostAuthor v-bind:author="post.author"/>
      <small>{{ post.date }}</small>
      <h1>{{ post.title }}</h1>
      <p>{{ post.paragraph }}</p>
    </div>
</template>

<script>
import PostAuthor from '../components/PostAuthor.vue'

export default {
  name: 'PostPage',
  props: ['post'],
  components: {
    PostAuthor
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

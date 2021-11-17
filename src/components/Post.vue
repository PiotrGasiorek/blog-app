<template>
  <div class="">
    <div>
      <img src="" alt="">
    </div>
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.paragraph }}</p>
      <a href='#'>Read more</a>
    </div>
    <PostAuthor v-bind:author="post.author"/>
    <PostDeleteButton/>
  </div>
</template>

<script>
import PostAuthor from './PostAuthor.vue'
import PostDeleteButton from './PostDeleteButton.vue'

export default {
  name: 'Post',
  props: ['post'],
  components: {
    PostAuthor
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

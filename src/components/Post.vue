<template>
  <div class="">
    <div>
      <img src="" alt="">
    </div>
    <div>
      <small>{{ post.date }}</small>
      <h3>{{ post.title }}</h3>
      <p>{{ post.paragraph }}</p>
      <a href='#'>Read more</a>
    </div>
    <PostAuthor v-bind:author="post.author"/>
    <PostDeleteButton v-on:click="deletePost(post.id)"/>
  </div>
</template>

<script>
import PostAuthor from './PostAuthor.vue'
import PostDeleteButton from './PostDeleteButton.vue'

export default {
  name: 'Post',
  props: ['post'],
  components: {
    PostAuthor,
    PostDeleteButton
  },
  methods: {
    deletePost(id) {
      this.$emit('deletePost', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

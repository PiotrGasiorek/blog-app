<template>
  <div class="">
    <div>
      <img src="" alt="">
    </div>
    <div>
      <small>{{ post.date }}</small>
      <h3>{{ post.title }}</h3>
      <p>{{ post.paragraph }}</p>
      <Button v-on:click="deletePost(post)"/>
      <Button 
        v-bind:type="'link'"
        v-bind:postId="post.id"
      />
    </div>
    <PostAuthor v-bind:author="post.author"/>
  </div>
</template>

<script>
import PostAuthor from './PostAuthor.vue'
import Button from './Button.vue'

export default {
  name: 'PostCard',
  props: ['post'],
  components: {
    PostAuthor,
    Button
  },
  methods: {
    deletePost(post) {
      this.$store.dispatch('deletePost', post);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

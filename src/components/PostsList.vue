<template>
  <div class="myId">
    <Post 
      v-for="post in posts" 
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
  data: function() {
    return {
      posts: [
        {
          title: 'Lorem ipsum odlor',
          paragraph: 'No se some more content',
          author: 'Arturo Gonzalez',
          id: 3421,
        },
        {
          title: 'Lorem ipsum odlor',
          paragraph: 'No se some more content',
          author: 'Arturo Gonzalez',
          id: 214,
        },
        {
          title: 'Lorem ipsum odlor',
          paragraph: 'No se some more content',
          author: 'Arturo Gonzalez',
          id: 12,
        },
        {
          title: 'Lorem ipsum odlor',
          paragraph: 'No se some more content',
          author: 'Arturo Gonzalez',
          id: 421,
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
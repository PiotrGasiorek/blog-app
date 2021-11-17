<template>
  <div class="myId">
    <Post 
      v-for="post in posts" 
      v-bind:key="post.id" 
      v-bind:post="post"
      @deletePost="deletePost"
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
      posts: [],
      apiHref: 'https://my-json-server.typicode.com/PiotrGasiorek/blog-app/posts'
    }
  },
  methods: {
    getPosts() {
      fetch(`${this.apiHref}?_page=1&_limit=10`)
        .then((response) => response.json())
        .then((response) => {
          this.posts = response;
        })
        .catch(error => console.log(error));
    },

    deletePost(id) {
      fetch(`${this.apiHref}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      });

      this.posts = this.posts.filter(post => post.id !== id)
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>
  <Home/>
  <!-- <PostsList/> -->
</template>

<script>
import Home from '../src/views/Home.vue';
// import Post from '../src/views/Post.vue';
// import VueRouter from 'vue-router'
// import PostPage from './PostPage.vue'
// const router = new VueRouter({
//   routes: [
//     { path: '/blogpost/:id', component: PostPage }
//   ]
// })

export default {
  name: 'App',
  components: {
    Home,
    // Post
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

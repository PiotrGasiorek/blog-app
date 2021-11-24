<template>
  <Nav/>
  <PostsList/>
</template>

<script>
import PostsList from '../components/PostsList.vue';
import Nav from '../components/Nav.vue';

export default {
  name: 'Home',
  components: {
    PostsList,
    Nav
  }
}
</script>
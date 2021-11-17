<template>
  <div>
    <div>
      <img src="" alt="">
    </div>
    <small>{{ author }}</small>
  </div>
</template>

<script>
export default {
  name: 'PostAuthor',
  props: {
    author: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

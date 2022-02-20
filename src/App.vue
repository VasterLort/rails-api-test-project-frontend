<template>
  <div id="app">
    <div class="container">
      <h1>Todo List Manager</h1>
      <h6>
        Powered by: Vue | Vuex 4 | Axios | Ruby on Rails 6 | SQLite 3
      </h6>

      <PostCreate />
      <PostFilter />
      <PostIndex />
    </div>
  </div>
</template>

<script>
import PostIndex from './components/PostIndex.vue'; 
import PostCreate from './components/PostCreate.vue';
import PostFilter from './components/PostFilter.vue';

export default {
  name: "app",
  components: {
    PostIndex,
    PostCreate,
    PostFilter
  }
}
</script>

<style>
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
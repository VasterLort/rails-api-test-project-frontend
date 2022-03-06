<template>
  <div id="app">
    <div class="container">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link> |
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
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
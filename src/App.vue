<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/sign_in">Login</router-link> |
      <router-link to="/sign_up">Register</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <button type="button" class="btn btn-primary" v-if="isLoggedIn" @click="logoutUser">Logout</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  
  methods: {
    ...mapActions(['logoutUser'])
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
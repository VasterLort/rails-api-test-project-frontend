import axios from 'axios';
window.axios = axios;

const API_URL = "http://localhost:3000/posts";

const state = {
  posts: []
};

const getters = {
  allPosts: (state) => state.posts
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(API_URL);
    commit('setPosts', response.data);
  },

  async createPost({ commit }, title, description) {
    const response = await axios.post(API_URL,
    { 
      post: {
        title, 
        description
      }
    });
    commit('newPost', response.data);
  },
  
  async deletePost({ commit }, id) {
    await axios.delete(API_URL + `/${id}`);
    commit('removePost', id);
  },

  async filterPosts({ commit }, event) {
    // Get selected number
    const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText);
    console.log(limit);
    const response = await axios.get(API_URL + `?_limit=${limit}`);
    commit('setPosts', response.data);
  },

  async updatePost({ commit }, updatedPost) {
    const response = await axios.put(API_URL + `/${updatedPost.id}`, updatedPost);
    commit('setUpdatedPost', response.data);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  newPost: (state, post) => (state.posts.unshift(post)),
  removePost: (state, id) => (state.posts = state.posts.filter(post => post.id !== id)),
  setUpdatedPost: (state, updatedPost) => {
    const index = state.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  }
};

export default {
    state,
    getters,
    actions,
    mutations
}
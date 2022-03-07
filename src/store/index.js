import { createStore } from 'vuex'
import posts from './modules/posts'
import sessionManager from './modules/session_manager'
export default createStore({
  modules: {
    posts,
    sessionManager
  }
})
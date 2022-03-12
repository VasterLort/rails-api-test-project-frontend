<template>
  <div>
    <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">Delete account</button>
    <div class="modal fade" id="confirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Confirm action</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you really want to delete your account?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteAccount">Yes, delete my account</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p v-if="msg">{{msg}}</p>
    </div>
  </div>  
</template>
<script>
import axios from 'axios'
import { mapGetters } from "vuex";
import router from "../router/index.js"
export default {
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters(["getAuthToken"]),
  },

  methods: {
    async deleteAccount() {
      try {
        await axios.delete("http://localhost:3000/users", {
          headers: {
            Authorization: this.getAuthToken,
          }
        }).then(() => router.push('/'))
      } catch (error) {
        console.log(error)
      } 
    }
  },
}
</script>
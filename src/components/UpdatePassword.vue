<template>
  <div class="container">
    <h1 class="sm-title">Vue Session Manager</h1>
    <div class="card-body">
      <h4 class="card-subtitle mb-2 text-muted text-center">Enter New Password</h4>
      <div class="mb-3 row">
        <label for="newPassword" class="col-sm-3 col-form-label" style="white-space: nowrap;">New Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" name="newPassword" v-model="newPassword" />
        </div>
      </div> 
      <div class="mb-3 row">
        <label for="confirmPassword" class="col-sm-3 col-form-label" style="white-space: nowrap;">Confirm Password</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" name="confirmPassword" v-model="confirmPassword" />
        </div>
      </div> 

      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" @click="setNewPassword">Set new password</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from "../router/index.js"
export default {
  name: "UpdatePassword",
  
  data() {
    return {
      newPassword: "",
      confirmPassword: ""
    };
  },

  methods: {
    checkURLParameters() {
      if (window.location.search == '')
      router.go(-1) 
    },

    async setNewPassword() {
      try {
        await axios.put('http://localhost:3000/users/password', {
          user: { 
              password: this.newPassword,
              password_confirmation: this.confirmPassword,
              reset_password_token: this.$route.query.reset_password_token
            }
        }).then((response) => {
          console.log(response.data)
          alert('Success')
        }).catch((error) => {
          throw error
        })
      } catch (error) {
        console.log(error)
      }
    },

    resetData() {
      this.newPassword = "";
      this.confirmPassword = ""
    }
  },

  created() {
    this.checkURLParameters()
  }
}
</script>
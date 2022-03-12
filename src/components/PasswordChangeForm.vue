<template>
  <div class="collapse" id="passwordChangeForm">
    <div class="card m-1">
      <div class="card-header">
        <h4>Change password</h4> 
      </div>
      <div class="card-body text-nowrap">        
        <div class="mb-3 row">
          <label for="currentPassword" class="col-sm-3 col-form-label">Current Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="currentPassword" v-model="currentPassword" maxlength="50" minlength="6">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="newPassword" class="col-sm-3 col-form-label">New Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="newPassword" v-model="newPassword" maxlength="50" minlength="6">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="confirmPassword" class="col-sm-3 col-form-label">Confirm Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" maxlength="50" minlength="6">
          </div>
        </div>        
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-secondary me-1" data-bs-toggle="collapse" data-bs-target="#passwordChangeForm" aria-expanded="false" aria-controls="passwordChangeForm">
          Cancel
        </button>
        <button class="btn btn-primary" @click="changePassword">Set password</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from "vuex";
export default {
  name: "PasswordChangeForm",
  computed: {
    ...mapGetters(["getUserEmail", "getAuthToken"]),
  },

  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },

  methods: {
    async changePassword() {
      const config = {
        headers: {
          Authorization: this.getAuthToken,
        },
      };
      try {
        await axios.patch('http://localhost:3000/users', {
          user: { 
              email: this.getUserEmail,
              password: this.newPassword,
              current_password: this.currentPassword,
              password_confirmation: this.confirmPassword
            }
        }, config).then((response) => {
          console.log(response.data)
          alert('Success')
        }).catch((error) => {
          throw error
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
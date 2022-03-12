<template>
  <div class="collapse" id="emailChangeForm">
    <div class="card m-1">
      <div class="card-header">
        <h4>Change email</h4> 
      </div>
      <div class="card-body text-nowrap">  
        <div class="mb-3 row">
          <label for="newEmail" class="col-sm-3 col-form-label">New Email</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="newEmail" v-model="newEmail" maxlength="50" minlength="6">
          </div>
        </div>        
        <div class="mb-3 row">
          <label for="currentPassword" class="col-sm-3 col-form-label">Current Password</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="currentPassword" v-model="currentPassword" maxlength="50" minlength="6">
          </div>
        </div>     
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-secondary me-1" data-bs-toggle="collapse" data-bs-target="#isLoggedIn" aria-expanded="false" aria-controls="isLoggedIn">
          Cancel
        </button>
        <button class="btn btn-primary" @click="changeEmail">Set password</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from "vuex";
export default {
  name: "EmailChangeForm",
  computed: {
    ...mapGetters(["getAuthToken"]),
  },

  data() {
    return {
      newEmail: '',
      currentPassword: ''
    }
  },

  methods: {
    async changeEmail() {
      const config = {
        headers: {
          Authorization: this.getAuthToken,
        },
      };
      try {
        await axios.patch('http://localhost:3000/users', {
          user: { 
              email: this.newEmail,
              current_password: this.currentPassword
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
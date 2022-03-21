<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            <h3 class="mb-5">Change your password</h3>

            <form @submit="setNewPassword">
              <div class="form-outline mb-4">
                <input type="password" class="form-control form-control-lg" v-model="newPassword" placeholder="New Password" />
              </div>

              <div class="form-outline mb-4">
                <input type="password" class="form-control form-control-lg" v-model="confirmPassword" placeholder="Confirm new password" />
              </div>
              
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Change my password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SweetAlert from '../services/sweetAlert'
import { USER_PASSWORD_URL, PASSWORDS_UPDATED } from '../services/constants.js';

export default {
  name: 'NewPasswordPage',
  
  data() {
    return {
      newPassword: '',
      confirmPassword: ''
    };
  },

  methods: {
    async setNewPassword(event) {
      event.preventDefault();
      try {
        await axios.put(USER_PASSWORD_URL, this.setUserData());
        this.$router.push('/sign_in');
        SweetAlert.successfulDeviseMessages(PASSWORDS_UPDATED);
      } catch (error) {
        SweetAlert.failureDeviseMessages(error.response.data.message);
      }
    },

    setUserData() {
      return {
        user: { 
          password: this.newPassword,
          password_confirmation: this.confirmPassword,
          reset_password_token: this.$route.query.reset_password_token
        }
      };
    }
  }
}
</script>
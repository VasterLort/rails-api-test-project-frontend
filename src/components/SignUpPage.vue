<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            <h3 class="mb-5">Sign Up!</h3>

            <form @submit="onSignUp">
              <div class="form-outline mb-4">
                <input type="email" name="email" class="form-control form-control-lg" v-model="email" placeholder="Email"/>
              </div>

              <div class="form-outline mb-4">
                <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Password" />
              </div>

              <div class="form-outline mb-4">
                <input type="password" class="form-control form-control-lg" v-model="password_confirmation" placeholder="Password confirmation" />
              </div>
              
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Sign Up</button>
              </div>
            </form>

            <hr class="my-4">
            
            <ResendConfirmationForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SweetAlert from '../services/sweetAlert'
import { REGISTRATIONS_SIGNED_UP_BUT_UNCONFIRMED } from '../services/constants.js';
import ResendConfirmationForm from './forms/ResendConfirmationForm.vue';

export default {
  name: 'SignUpPage',

  data() {
    return {
      email: '',
      password: '',
      password_confirmation: ''
    };
  },

  methods: {
    ...mapActions(['registerUser']),

    onSignUp(event) {
      event.preventDefault();

      this.registerUser(this.setUserData())
        .then(() => {
          this.$router.push('/sign_in');
          SweetAlert.successfulDeviseMessages(REGISTRATIONS_SIGNED_UP_BUT_UNCONFIRMED);
        })  
        .catch((error) => {
          SweetAlert.failureDeviseMessages(error.response.data.message);
      });

      this.resetUserData();
    },

    setUserData() {
      return {
        user: {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
      };
    },

    resetUserData() {
      this.email = '';
      this.password = '';
      this.password_confirmation = '';
    }
  },

  components: {
    ResendConfirmationForm
  }
}
</script>
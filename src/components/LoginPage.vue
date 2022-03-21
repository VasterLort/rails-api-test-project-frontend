<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
            <h3 class="mb-5">Login!</h3>

            <form @submit="onLogin">
              <div class="form-outline mb-4">
                <input type="email" name="email" class="form-control form-control-lg" v-model="email" placeholder="Email"/>
              </div>

              <div class="form-outline mb-4">
                <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Password" />
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Login</button>
              </div>
            </form>

            <hr class="my-4">
            
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SweetAlert from '../services/sweetAlert'
import ResetPasswordForm from './forms/ResetPasswordForm.vue';
import { CONFIRMATIONS_ALREADY_CONFIRMED, CONFIRMATIONS_CONFIRMED, CONFIRMATIONS_INVALID, SUCCESS, ERROR } from '../services/constants.js';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
      password: ''
    };
  },

  props: ['query'],
  methods: {
    ...mapActions(['loginUser']),

    onLogin(event) {
      event.preventDefault();

      this.loginUser(this.setUserData())
        .then((response) => {
          this.$router.push('/profile');
          SweetAlert.successfulDeviseMessages(response.data.message);
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
          password: this.password
        }
      };
    },

    resetUserData() {
      this.email = '';
      this.password = '';
    },

    showMessageByQuery() {
      switch (this.query) {
        case 'already_confirmed':
          SweetAlert.showConfirmationMessage(CONFIRMATIONS_ALREADY_CONFIRMED, ERROR);
          break;
        case 'confirmed':
          SweetAlert.showConfirmationMessage(CONFIRMATIONS_CONFIRMED, SUCCESS);
          break;
        case 'invalid':
          SweetAlert.showConfirmationMessage(CONFIRMATIONS_INVALID, ERROR);
          break;
        default:
          break;
      }
    }
  },

  beforeCreate() {
    this.$router.replace({ name: 'LoginPage' });
  },

  mounted () {
    this.showMessageByQuery();
  },

  components: {
    ResetPasswordForm
  }
}
</script>
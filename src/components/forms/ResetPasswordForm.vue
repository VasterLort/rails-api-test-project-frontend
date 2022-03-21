<template>
  <div class="d-grid gap-2" id="resetPassword">
    <button type="button" class="btn btn-primary" @click="showModal">Forgot password?</button>

    <div class="modal fade" id="resetPasswordModal" tabindex="-1" aria-labelledby="resetPasswordModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="resetPasswordModalLabel">Reset Password</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit="resetPassword">
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input type="email" name="email" class="form-control form-control-lg" v-model="email" placeholder="Email"/>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Send me reset password instructions</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SweetAlert from '../../services/sweetAlert';
import { PASSWORDS_SEND_INSTRUCTIONS, USER_PASSWORD_URL } from '../../services/constants.js';

const Modal = require('bootstrap/js/dist/modal.js');

export default {
  name: 'ResetPasswordForm',
  
  data() {
    return {
      email: '',
      resetPasswordModal: HTMLElement
    };
  },

  mounted() {
    this.resetPasswordModal = new Modal(document.getElementById('resetPasswordModal'));
  },

  methods: {
    async resetPassword(event) {
      event.preventDefault();
      try {
        await axios.post(USER_PASSWORD_URL, this.setUserData());
        this.hideModal();
        SweetAlert.successfulDeviseMessages(PASSWORDS_SEND_INSTRUCTIONS);
      } catch (error) {
        SweetAlert.failureDeviseMessages(error.response.data.message);
      }

      this.email = '';
    },

    showModal() {
      this.resetPasswordModal.show();
    },

    hideModal() {
      this.resetPasswordModal.hide();
    },

    setUserData() {
      return {
        user: { 
          email: this.email
        }
      };
    }
  }
}
</script>
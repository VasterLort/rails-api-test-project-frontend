<template>
  <div class="d-grid gap-2" id="resendConfirmation">
    <button type="button" class="btn btn-primary" @click="showModal">Didn't receive confirmation instructions?</button>

    <div class="modal fade" id="resendConfirmationModal" tabindex="-1" aria-labelledby="resendConfirmationModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="resendConfirmationModalLabel">Resend confirmation instructions</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit="resendConfirmationInstructions">
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input type="email" name="email" class="form-control form-control-lg" v-model="email" placeholder="Email"/>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Resend confirmation instructions</button>
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
import { CONFIRMATIONS_SEND_INSTRUCTIONS, USER_CONFIRMATION_URL } from '../../services/constants.js';

const Modal = require('bootstrap/js/dist/modal.js');

export default {
  name: 'ResendConfirmationForm',

  data() {
    return {
      email: '',
      resendConfirmationModal: HTMLElement
    }
  },

  mounted() {
    this.resendConfirmationModal = new Modal(document.getElementById('resendConfirmationModal'));
  },

  methods: {
    async resendConfirmationInstructions(event) {
      event.preventDefault();
      try {
        await axios.post(USER_CONFIRMATION_URL, this.setUserData());
        this.hideModal();
        SweetAlert.successfulDeviseMessages(CONFIRMATIONS_SEND_INSTRUCTIONS);
      } catch (error) {
        SweetAlert.failureDeviseMessages(error.response.data.message);
      }

      this.email = '';
    },

    showModal() {
      this.resendConfirmationModal.show();
    },

    hideModal() {
      this.resendConfirmationModal.hide();
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
<template>
  <div id="accountSettings">
    <button type="button" class="btn btn-primary ms-1" @click="showModal">Account settings</button>
    <div class="modal fade" id="accountSettingsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">    
          <div class="modal-header">
            <h5 class="modal-title w-100 text-center" id="staticBackdropLabel">Account Settings</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <p class="text-muted mb-1">Edit your account settings and change your password here.</p>

          <div class="modal-body">
            <div class="card-body text-nowrap"> 
              <div class="mb-3 row">
                <label for="email" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" id="email" v-model="user.email" maxlength="50" minlength="6">
                </div>
              </div>  
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
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="changeAccountSettings">Change account settings</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import SweetAlert from '../../services/sweetAlert';
import { REGISTRATIONS_UPDATED, USER_REGISTRATION_URL } from '../../services/constants.js';

const Modal = require('bootstrap/js/dist/modal.js');

export default {
  name: 'AccountSettingsForm',
  computed: {
    ...mapGetters({
      user: 'getUser',
      authToken: 'getAuthToken'
    })
  },

  data() {
    return {
      newPassword: '',
      confirmPassword: '',
      currentPassword: '',
      accountSettingsModal: HTMLElement
    }
  },

  mounted() {
    this.accountSettingsModal = new Modal(document.getElementById('accountSettingsModal'));
  },

  methods: {
    async changeAccountSettings() {
      try {
        await axios.patch(USER_REGISTRATION_URL, this.setAccountData(), this.setHeaders());
        this.hideModal();
        SweetAlert.successfulDeviseMessages(REGISTRATIONS_UPDATED);
      } catch (error) {
        SweetAlert.failureDeviseMessages(error.response.data.message);
      }

      this.resetUserData();
    },

    setAccountData() {
      return {
        user: { 
          email: this.user.email,
          password: this.newPassword,
          current_password: this.currentPassword,
          password_confirmation: this.confirmPassword
        }
      };
    },

    setHeaders() {
      return {
        headers: {
          Authorization: this.authToken
        }
      };
    },

    showModal() {
      this.accountSettingsModal.show();
    },

    hideModal() {
      this.accountSettingsModal.hide();
    },

    resetUserData() {
      this.newPassword = '';
      this.confirmPassword = '';
      this.currentPassword = '';
    }
  }
}
</script>
<template>
  <div id="deleteAccount">
    <button type="button" class="btn btn-outline-primary ms-1" data-bs-toggle="modal" data-bs-target="#deleteAccountModal">Delete profile</button>
    <div class="modal fade" id="deleteAccountModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title w-100 text-center" id="staticBackdropLabel">Confirm action</h5>
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
  </div>  
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import SweetAlert from '../../services/sweetAlert';
import { REGISTRATIONS_DESTROYED, USER_REGISTRATION_URL } from '../../services/constants.js';

export default {
  name: 'DeleteAccountForm',

  computed: {
    ...mapGetters(['getAuthToken'])
  },

  methods: {
    ...mapActions(['logoutUser']),

    async deleteAccount() {
      try {
        await axios.delete(USER_REGISTRATION_URL, this.setHeaders());
        this.$router.push('/');
        SweetAlert.successfulDeviseMessages(REGISTRATIONS_DESTROYED);
      } catch (error) {
        SweetAlert.failureDeviseMessages(error.response.data.message);
      } 

      this.logoutUser()
    },

    setHeaders() {
      return {
        headers: {
          Authorization: this.getAuthToken
        }
      };
    }
  }
}
</script>
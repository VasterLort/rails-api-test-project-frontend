<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-5">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
            <h5 class="my-3">Nickname</h5>
            <p class="text-muted mb-1">Full Name</p>
            <p class="text-muted mb-4">{{ this.getUserEmail }}</p>
            <div class="d-flex justify-content-center mb-3">
              <button type="button" class="btn btn-primary">Edit profile</button>
              <AccountSettingsForm />
              <DeleteAccountForm />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Full Name</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Nickname</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Nickname</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ this.getUserEmail }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">Mobile</p>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DeleteAccountForm from './forms/DeleteAccountForm.vue';
import AccountSettingsForm from './forms/AccountSettingsForm.vue';
export default {
  name: 'ProfilePage',
  computed: {
    ...mapGetters(['getUserEmail'])
  },

  components: {
    DeleteAccountForm,
    AccountSettingsForm
  }
}
</script>
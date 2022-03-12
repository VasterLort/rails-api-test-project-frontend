<template>
  <div class="collapse" id="emailChangeForm">
    <div class="card m-1">
      <div class="card-header">
        <h4>Input your email</h4> 
      </div>
      <div class="card-body text-nowrap">  
        <div class="mb-3 row">
          <label for="email" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="email" v-model="email" maxlength="50" minlength="6">
          </div>
        </div>            
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-secondary me-1" data-bs-toggle="collapse" data-bs-target="#isLoggedIn" aria-expanded="false" aria-controls="isLoggedIn">
          Cancel
        </button>
        <button class="btn btn-primary" @click="sendEmailInstructions">Send email instructions</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ReceiveConfirmation",

  data() {
    return {
      email: ''
    }
  },

  methods: {
    async sendEmailInstructions() {
      try {
        await axios.post('http://localhost:3000/users/confirmation', 
        {
          user: { email: this.email }, commit: "Resend confirmation instructions"
        }
        ).then((response) => {
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
import Swal from 'sweetalert2'

export default {
  successfulDeviseMessages(message) {
    Swal.fire({
      title: 'Success!',
      text: `${message}`,
      position: 'center',
      icon: 'success',
      timer: 5000,
      showConfirmButton: false
    })
  },

  failureDeviseMessages(message) {
    message = Array.isArray(message) ? message.join("\r\n") : message
    Swal.fire({
      title: 'Error!',
      html: '<pre>' + message + '</pre>',
      icon: 'error',
      timer: 5000,
      showConfirmButton: false
    })
  },
  
  showConfirmationMessage(message, icon) {
    Swal.fire({
      title: 'Confirmation account!',
      text: `${message}`,
      icon: `${icon}`,
      timer: 5000,
      showConfirmButton: false
    })
  }
}
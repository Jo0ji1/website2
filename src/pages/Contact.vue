<template>
  <div class="container my-5 pt-5">
    <h2 class="text-center mb-4">Contato</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="map-container rounded-3 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.628147603882!2d-46.655249!3d-23.548808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzU1LjciUyA0NsKwMzknMTguOSJX!5e0!3m2!1spt-BR!2sbr!4v1622560000000!5m2!1spt-BR!2sbr"
            class="w-100"
            height="300"
            style="border:0;"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-4">
          <form @submit.prevent="submitForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <input v-model="name" type="text" class="form-control" placeholder="Nome" required>
              <div class="invalid-feedback">Por favor insira seu nome</div>
            </div>
            <div class="mb-3">
              <input v-model="email" type="email" class="form-control" placeholder="Email" required>
              <div class="invalid-feedback">Por favor insira um email válido</div>
            </div>
            <div class="mb-3">
              <textarea v-model="message" class="form-control" placeholder="Sua mensagem" rows="5" required></textarea>
              <div class="invalid-feedback">Por favor insira sua mensagem</div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="submitted" class="alert alert-success mt-4 text-center">
      <p>Obrigado, {{ name }}! Sua mensagem foi enviada com sucesso.</p>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    }
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        emailjs.send('service_s4de6qj', 'template_s32cqjd', {
          name: this.name,
          email: this.email,
          message: this.message
        }, 'w61IyRBE_l136YiKq')
        .then(() => {
          this.submitted = true
        }, (error) => {
          console.error('Erro ao enviar o email:', error)
        })
      }
    },
    validateForm() {
      const form = document.querySelector('.needs-validation')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.map-container {
  height: 300px;
}
</style>

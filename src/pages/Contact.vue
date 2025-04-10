<template>
    <div class="container my-5 pt-5">
      <h2 class="text-center mb-4">Contato</h2>
      <div class="card p-4 mx-auto" style="max-width:600px;">
        <form @submit.prevent="submitForm" class="d-flex flex-column gap-3">
          <input v-model="name" type="text" placeholder="Nome" class="form-control" />
          <input v-model="email" type="email" placeholder="Email" class="form-control" />
          <textarea v-model="message" placeholder="Sua mensagem" class="form-control" rows="5"></textarea>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
      <div v-if="submitted" class="alert alert-success mt-4 text-center">
        <p>Obrigado, {{ name }}! Sua mensagem foi enviada com sucesso.</p>
      </div>
    </div>
  </template>
  
  <script>
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
        if (this.name && this.email && this.message) {
          this.submitted = true;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  
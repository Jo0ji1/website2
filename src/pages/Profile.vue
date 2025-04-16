<template>
  <div class="container my-5 pt-5">
    <div v-if="!loggedIn" class="card p-4 mx-auto" style="max-width: 400px;">
      <h2 class="card-title text-center mb-3">Login</h2>
      <form @submit.prevent="login" class="d-flex flex-column gap-3">
        <input v-model="username" type="text" placeholder="Usuário" class="form-control" required>
        <input v-model="password" type="password" placeholder="Senha" class="form-control" required>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
    <div v-else class="card p-4 mx-auto" style="max-width: 800px;">
      <h2 class="card-title text-center mb-3">Bem-vindo, {{ username }}!</h2>
      <h3 class="mb-3">Sua Galeria</h3>
      <div class="row g-3 mb-4">
        <div class="col-6 col-md-4" v-for="(img, index) in userGallery" :key="index">
          <div class="card">
            <img :src="img" class="card-img-top" alt="Imagem do usuário" style="height:150px; object-fit:cover;">
            <div class="card-body p-2 text-center">
              <button @click="removeImage(index)" class="btn btn-sm btn-danger">Remover</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="mb-2">Adicionar Nova Imagem</h3>
        <div class="input-group">
          <input v-model="newImage" type="text" placeholder="URL da imagem" class="form-control">
          <button @click="addImage" class="btn btn-success">Adicionar</button>
        </div>
      </div>
      <div class="text-center">
        <button @click="logout" class="btn btn-secondary">Sair</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      loggedIn: false,
      username: '',
      password: '',
      userGallery: [],
      newImage: ''
    }
  },
  methods: {
    login() {
      if (this.username && this.password) {
        this.loggedIn = true;
        const gallery = localStorage.getItem(`gallery_${this.username}`);
        this.userGallery = gallery ? JSON.parse(gallery) : [];
      }
    },
    logout() {
      this.loggedIn = false;
      this.username = '';
      this.password = '';
      this.userGallery = [];
      this.newImage = '';
    },
    addImage() {
      if (this.newImage.trim() !== '') {
        this.userGallery.push(this.newImage.trim());
        this.newImage = '';
        this.saveGallery();
      }
    },
    removeImage(index) {
      this.userGallery.splice(index, 1);
      this.saveGallery();
    },
    saveGallery() {
      localStorage.setItem(`gallery_${this.username}`, JSON.stringify(this.userGallery));
    }
  }
}
</script>

<style scoped>
</style>

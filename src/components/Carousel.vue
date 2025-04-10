<template>
  <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        v-for="(img, index) in images"
        :key="index"
      >
        <img :src="img.src" class="d-block w-100" style="height: 500px; object-fit:cover;" alt="Slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ img.title }}</h5>
          <p>{{ img.desc }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Próximo</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      images: [
        {
          src: 'https://picsum.photos/1200/600?random=1',
          title: 'Slide 1',
          desc: 'Legenda para o slide 1.'
        },
        {
          src: 'https://picsum.photos/1200/600?random=2',
          title: 'Slide 2',
          desc: 'Legenda para o slide 2.'
        },
        {
          src: 'https://picsum.photos/1200/600?random=3',
          title: 'Slide 3',
          desc: 'Legenda para o slide 3.'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>

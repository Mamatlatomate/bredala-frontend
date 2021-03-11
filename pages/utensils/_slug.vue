<template>
  <div class="container bg-white shadow-md py-10">
    <div class="text-center mb-10 px-3">
      <h1 class="font-dancing font-bold text-5xl">{{ utensil.name }}</h1>
    </div>
    <img :src="utensil.images.classic" class="w-auto object-cover mx-auto" />
    <div
      class="px-5 md:px-20 mt-10 text-center"
      v-html="utensil.description"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Utensil',
  async asyncData({ app, params, query }) {
    const utensil = await app.$axios.$get(`utensil/${params.slug}`)

    return {
      utensil: utensil.data,
    }
  },
  head() {
    return {
      title: 'Ustensile - ' + this.utensil.name + ' | Les Bredlas de Mamema',
    }
  },
}
</script>

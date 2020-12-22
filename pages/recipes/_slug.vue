<template>
  <div class="container bg-white shadow-md py-10">
    <div class="text-center mb-10">
      <h1 class="font-dancing font-bold text-5xl">{{ recipe.title }}</h1>
      <div>
        <nuxt-link
          v-for="(tag, key) in recipe.tags.data"
          :key="key"
          :to="{ name: 'category', params: { slug: tag.slug } }"
          class="italic text-orange mr-3 hover:underline"
        >
          #{{ tag.name }}
        </nuxt-link>
      </div>
    </div>
    <img
      :src="recipe.images.classic"
      class="w-full object-cover my-10"
      style="height: 20rem"
    />

    <div class="grid grid-cols-5 divide-x divide-orange mt-10 px-10">
      <div class="col-span-1">
        <div class="mb-5">
          <h3>Ingrédients</h3>
          <p
            v-for="(ingredient, key) in recipe.ingredients"
            :key="key"
            class="mb-2"
          >
            <span class="block">{{ ingredient.name }}</span>
            <span class="font-bold">{{ ingredient.quantity }}</span>
          </p>
        </div>

        <div v-if="recipe.utensils">
          <h3>Ustensils</h3>
          <ul>
            <li v-for="(utensil, key) in recipe.utensils" :key="key">
              {{ utensil.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-4 pl-16">
        <h3>Recette</h3>
        <div class="body" v-html="recipe.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  async asyncData({ app, params, query }) {
    const recipe = await app.$axios.$get(`recipe/${params.slug}`)

    if (!query.previsualisation) {
      app.$axios.$post(`recipe/count-view/${params.slug}`)
    }

    return {
      recipe: recipe.data,
    }
  },
  head() {
    return {
      title: this.recipe.title + ' | Les Bredlas de Mamema',
    }
  },
}
</script>

<style lang="postcss">
h3 {
  @apply font-bold text-3xl mb-3 !important;
}

.body img {
  @apply my-4;
}
</style>

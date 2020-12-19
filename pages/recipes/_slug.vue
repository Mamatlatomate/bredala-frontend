<template>
  <div>
    <div class="flex items-center">
      <img
        :src="recipe.images.classic"
        class="w-auto object-cover mr-10"
        style="height: 20rem"
      />
      <div>
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
    </div>

    <div class="grid grid-cols-2 my-10">
      <div>
        <h3>Ingrédients</h3>
        <ul>
          <li v-for="(ingredient, key) in recipe.ingredients" :key="key">
            {{ ingredient.name }} - {{ ingredient.quantity }}
          </li>
        </ul>
      </div>

      <div>
        <h3>Ustensils</h3>
        <ul>
          <li v-for="(utensil, key) in recipe.utensils" :key="key">
            {{ utensil.name }}
          </li>
        </ul>
      </div>
    </div>

    <div class="body" v-html="recipe.body"></div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  async asyncData({ app, params }) {
    const recipe = await app.$axios.$get(`recipe/${params.slug}`)

    return {
      recipe: recipe.data,
    }
  },
  head() {
    return {
      title: this.recipe.title + '| Les Bredlas de Mamema',
    }
  },
}
</script>

<style lang="postcss">
h3 {
  @apply font-dancing font-bold text-3xl !important;
}

.body img {
  @apply my-4;
}
</style>

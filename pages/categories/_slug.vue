<template>
  <div class="container">
    <h1 class="font-dancing font-bold text-5xl">{{ tag.name }}</h1>
    <p class="text-orange font-semibold mb-10">
      {{ recipesCount + (recipesCount > 1 ? ' recettes' : 'recette') }}
    </p>
    <div class="grid gap-y-16 gap-x-10 grid-cols-3">
      <RecipeCard
        v-for="(recipe, key) in recipes"
        :key="key"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  async asyncData({ app, params }) {
    const tag = await app.$axios.$get(`tag/${params.slug}`)

    return {
      tag: tag.data,
      recipes: tag.data.recipes.data,
      recipesCount: tag.data.recipes.data.length,
    }
  },
  head() {
    return {
      title: this.tag.name + ' | Les Bredlas de Mamema',
    }
  },
}
</script>

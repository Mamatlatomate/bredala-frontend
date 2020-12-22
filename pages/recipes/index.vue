<template>
  <div class="container px-4 lg:px-0 :mx-auto mt-20">
    <h1 class="font-dancing font-bold text-5xl mb-10">Toutes les recettes</h1>
    <div
      class="grid gap-y-16 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
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
  name: 'Homepage',
  async asyncData({ app }) {
    const recipes = await app.$axios.$get('recipes')

    return {
      recipes: recipes.data,
    }
  },
}
</script>

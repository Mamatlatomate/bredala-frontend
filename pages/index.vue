<template>
  <div class="container mx-auto">
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
  name: 'Homepage',
  async asyncData({ app }) {
    const recipes = await app.$axios.$get('recipes')

    return {
      recipes: recipes.data,
    }
  },
}
</script>

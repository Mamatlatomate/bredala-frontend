<template>
  <div class="container mx-auto">
    <div>
      <h1 class="text-orange">TITRE TEST</h1>

      <div class="grid gap-4 grid-cols-3">
        <RecipeCard
          v-for="(recipe, key) in recipes"
          :key="key"
          :recipe="recipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from '~/components/recipe-card'

export default {
  name: 'Homepage',
  components: { RecipeCard },
  async asyncData({ app }) {
    const recipes = await app.$axios.$get('recipes')

    return {
      recipes: recipes.data,
    }
  },
}
</script>

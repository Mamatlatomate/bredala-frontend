<template>
  <nuxt-link :to="{ name: 'recipe', params: { slug: recipe.slug } }">
    <img :src="recipe.images.thumbnail" class="w-full h-24 object-cover" />
    <div class="p-4">
      <h2>{{ recipe.title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<template>
  <nuxt-link :to="{ name: 'recipe', params: { slug: recipe.slug } }">
    <img v-if="recipe.images" :src="recipe.images.thumbnail" class="w-full h-64 object-cover" />
    <div class="py-3 px-2">
      <div class="flex">
        <div class="flex items-center mr-3">
          <IconClock class="w-4 h-4 mr-2"></IconClock>
          {{ recipe.duration }}
        </div>
        <div class="flex items-center">
          <IconDifficulty class="w-4 h-4 mr-2"></IconDifficulty>
          {{ recipe.difficulty }}
        </div>
      </div>
      <h2 class="font-semibold text-2xl font-dancing">{{ recipe.title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
import IconClock from '~/assets/icons/clock.svg?inline'
import IconDifficulty from '~/assets/icons/difficulty.svg?inline'

export default {
  name: 'RecipeCard',
  components: { IconClock, IconDifficulty },
  props: {
    recipe: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<template>
  <div>
    <div>
      <img class="banner w-full object-cover" src="~/assets/banner.JPG" />
    </div>
    <div class="container px-4 lg:px-0 :mx-auto mt-10">
      <div
        v-if="homeText.value"
        class="bg-orange my-10 py-2 px-10 flex items-center text-center lg:text-left"
      >
        <IconMamema class="mx-auto lg:mx-0 w-20 h-auto" />
        <div class="ml-6 text-white" v-html="homeText.value"></div>
      </div>

      <h2 class="font-dancing font-bold text-5xl mb-5">
        Les recettes les plus consultées
      </h2>
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
  </div>
</template>

<script>
import IconMamema from '~/assets/icons/mamema.svg?inline'

export default {
  name: 'Homepage',
  components: { IconMamema },
  async asyncData({ app }) {
    const [recipes, homeText] = await Promise.all([
      app.$axios.$get('recipes/by-views'),
      app.$axios.$get('setting/home_text'),
    ])

    return {
      recipes: recipes.data,
      homeText: homeText.data,
    }
  },
}
</script>

<style lang="postcss">
.banner {
  height: 25rem;
}
</style>

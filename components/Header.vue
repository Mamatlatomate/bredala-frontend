<template>
  <div class="mb-10">
    <nuxt-link :to="{ name: 'home' }">
      <h1 class="text-orange font-dancing text-6xl font-bold text-center">
        Les Bredlas de Mamema
      </h1>
    </nuxt-link>

    <div class="text-center">
      <nuxt-link
        v-for="(menu, key) in menuLinks"
        :key="key"
        class="mx-4 font-semibold"
        :to="{ name: menu.route }"
      >
        {{ menu.label }}
      </nuxt-link>
      <a href="mailto:besson.cris@wanadoo.fr" class="mx-4 font-semibold"
        >Contact</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuLinks: [
        {
          label: 'Home',
          route: 'home',
        },
        {
          label: 'Recettes',
          route: 'recipes',
        },
        {
          label: 'Qui suis-je ?',
          route: 'about',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply text-orange;
}
</style>

<template>
  <div class="mb-10">
    <nuxt-link :to="{ name: 'home' }">
      <img src="~/assets/logo.png" class="logo mx-auto max-w-lg" />
    </nuxt-link>

    <div class="text-center my-12">
      <nuxt-link
        v-for="(menu, key) in menuLinks"
        :key="key"
        class="mx-4 font-semibold text-lg"
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

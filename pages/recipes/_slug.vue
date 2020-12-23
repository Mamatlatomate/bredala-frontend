<template>
  <div class="container bg-white shadow-md py-10">
    <div class="text-center mb-10 px-3">
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
    <img
      :src="recipe.images.classic"
      class="w-full object-cover"
      style="height: 20rem"
    />

    <div
      class="bg-light grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-y-3 lg:gap-y-0 px-5 py-8"
    >
      <div class="info">
        <p>Temps de réalisation</p>
        <span>{{ recipe.duration }}</span>
      </div>
      <div class="info">
        <p>Quantité</p>
        <span>{{ recipe.quantity }}</span>
      </div>
      <div class="info">
        <p>Difficulté</p>
        <span>{{ recipe.difficulty }}</span>
      </div>
      <div class="info">
        <p>Coût de revient</p>
        <span>{{ recipe.price }}</span>
      </div>
    </div>

    <div
      class="grid grid-cols-5 lg:divide-x lg:divide-orange mt-10 px-5 lg:px-10"
    >
      <div class="col-span-5 md:col-span-1 mb-10 md:mb-0">
        <div class="mb-5">
          <h3>Ingrédients</h3>
          <p
            v-for="(ingredient, key) in recipe.ingredients"
            :key="key"
            class="mb-2"
          >
            <span class="block">{{ ingredient.name }}</span>
            <span class="font-bold">{{ ingredient.quantity }}</span>
          </p>
        </div>

        <div v-if="recipe.utensils">
          <h3>Ustensils</h3>
          <ul>
            <li v-for="(utensil, key) in recipe.utensils" :key="key">
              {{ utensil.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-5 md:col-span-4 md:pl-16">
        <h3>Recette</h3>
        <div class="body" v-html="recipe.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  async asyncData({ app, params, query }) {
    const recipe = await app.$axios.$get(`recipe/${params.slug}`)

    if (!query.previsualisation) {
      app.$axios.$post(`recipe/count-view/${params.slug}`)
    }

    return {
      recipe: recipe.data,
    }
  },
  head() {
    return {
      title: this.recipe.title + ' | Les Bredlas de Mamema',
    }
  },
}
</script>

<style lang="postcss">
h3 {
  @apply font-bold text-3xl mb-3 !important;
}

.info p {
  @apply font-bold text-lg;
}
.info span {
  @apply text-orange;
}

.body img {
  @apply my-4;
}

.body ol,
.body ul {
  list-style: none;
  counter-reset: item;
  margin: 15px 0 15px 0;
}
.body ol li,
.body ul li {
  counter-increment: item;
  margin-left: 20px;
}
.body ol li:before {
  margin: 5px 10px 5px 0;
  content: counter(item);
  border-radius: 100%;
  border: 1px solid #d06c16;
  color: #d06c16;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.body ul {
  list-style: disc;
}
</style>

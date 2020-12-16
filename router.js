import Vue from 'vue'
import Router from 'vue-router'
import qs from 'qs'

import Home from '~/pages/index'
import Recipes from '~/pages/recipes'
import Recipe from '~/pages/recipes/_slug'
import About from '~/pages/about'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const routes = [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'recipes',
      path: '/recettes',
      component: Recipes,
    },
    {
      name: 'recipe',
      path: '/recette/:slug',
      component: Recipe,
    },
    {
      name: 'about',
      path: '/qui-suis-je',
      component: About,
    },
  ]

  const options = routerOptions || createDefaultRouter(ssrContext).options

  // eslint-disable-next-line no-unused-vars
  const router = new Router({
    ...options,
    scrollToTop: true,
    parseQuery(query) {
      return qs.parse(query)
    },
    stringifyQuery(query) {
      const result = qs.stringify(query)

      return result ? '?' + result : ''
    },
    routes,
  })

  return router
}

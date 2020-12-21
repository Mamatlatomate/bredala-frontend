<template>
  <div class="text-black font-raleway">
    <Header />
    <div>
      <Nuxt class="mb-10" />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  @apply bg-light;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

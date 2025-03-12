<template>
  <AppHeader />
  <main class="app-main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<style lang="scss" scoped>
#app {
  .app-main {
    max-width: var(--app-max-width);
    margin: auto;
    padding: calc(var(--app-header-height) + var(--app-default-padding)) var(--app-default-padding) 120px;
  }
}
</style>

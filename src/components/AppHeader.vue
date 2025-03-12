<template>
  <header class="app-header">
    <div class="width-limiter">
      <RouterLink to="/" class="logo">
        <img src="/logo.svg" alt="SwatchOn" />
      </RouterLink>
      <div class="routes">
        <RouterLink to="/qualities" class="route">ITEMS</RouterLink>
      </div>
      <div class="functions">
        <a class="function">
          🛒
          <div v-if="numItems > 0" class="badge-count">{{ numItems }}</div>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const numItems = 5
</script>

<style lang="scss" scoped>
.app-header {
  height: var(--app-header-height);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  background: var(--white);
  gap: 16px;
  z-index: 1;

  .logo {
    flex: 0 0 auto;
    cursor: pointer;

    img {
      width: 120px;
    }
  }

  .routes {
    display: flex;
    flex: 1;
  }

  .width-limiter {
    width: 100%;
    max-width: var(--app-max-width);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--app-default-padding);
    gap: 16px;
  }

  a:not(.logo) {
    padding: 8px;
    border-radius: 4px;
  }

  .function {
    position: relative;
  }

  .badge-count {
    position: absolute;
    color: white;
    background: #8968d9;
    border-radius: 24px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 4px;
    top: 0;
    right: 0;
    pointer-events: none;
  }
}
</style>
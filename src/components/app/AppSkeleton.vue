<template>
  <div class="app-skeleton">
    <div class="container"><div class="bar" /></div>
  </div>
</template>

<style lang="scss" scoped>
.app-skeleton {
  border-radius: 8px;
  min-width: 20px;
  min-height: 20px;
  max-width: 100%;
  background: #F0F2F4;
  position: relative;
  overflow: hidden;

  .bar {
    height: 100%;
    width: 20px;
    background: #F6F7F8;
    filter: blur(16px);
  }

  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: skeleton 2s infinite ease-in-out;
  }

  @keyframes skeleton {
    0% {
      transform: translateX(-50%);
    }

    50% {
      transform: translateX(50%);
    }

    100% {
      transform: translateX(150%);
    }
  }
}
</style>
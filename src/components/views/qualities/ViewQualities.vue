<template>
  <div class="view-qualities">
    <div class="num-items">n items</div>
    <div>상품 목록</div>
    <div>페이지네이션</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.view-qualities {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .num-items {
    font-size: 18px;
    font-weight: 600;
  }

  .app-pagination {
    margin: auto;
  }
}
</style>
<template>
  <div class="view-qualities">
    <div class="num-items">n items</div>
    <QualitiesGrid :qualities="data?.items" :loading="isFetching" />

  </div>
</template>

<script setup lang="ts">
import {useQualityItems} from "@/composables/useQualityItems";
import QualitiesGrid from "@/components/views/qualities/QualitiesGrid.vue";

const page = 1;
const {data, isFetching} = useQualityItems(page)
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
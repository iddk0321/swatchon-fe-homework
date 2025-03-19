<template>
  <div class="view-qualities">
    <div class="num-items" :class="{hidden: isFetching}">{{ data?.total }} items</div>
    <QualitiesGrid :qualities="data?.items" :loading="isFetching"/>
    <AppPagination :per-page="data?.perPage" :total="data?.total" :page="data?.page" @page="onPageChange"/>
  </div>
</template>

<script setup lang="ts">
import {useQualityItems} from "@/composables/useQualityItems";
import QualitiesGrid from "@/components/views/qualities/QualitiesGrid.vue";
import AppPagination from "@/components/common/AppPagination.vue";
import {ref} from "vue";

const page = ref(1)

const onPageChange = (newPage: number) => {
  page.value = newPage
}

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

  .hidden {
    visibility: hidden;
  }

  .app-pagination {
    margin: auto;
  }
}
</style>
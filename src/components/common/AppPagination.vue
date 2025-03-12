<template>
  <div
    v-if="numTotalPages > 1"
    class="app-pagination">
    <div class="page-numbers">
      <span
        @click="onClickLeft"
        class="navigator"
        :class="{'disabled': page === 1}"
      ><</span>
      <div
        @click="onPage(1)"
        class="page-number"
        :class="{'active': page === 1}">1</div>
      <div v-if="pageNumbers[0] > 2" class="dots">
        <i class="fal fa-ellipsis-h c-gray-500"/>
      </div>
      <div
        @click="onPage(pageNum)"
        class="page-number"
        :class="{'active': pageNum === page}"
        v-html="pageNum"
        :key="pageNum"
        v-for="pageNum in pageNumbers"/>
      <div
        v-if="pageNumbers[pageNumbers.length - 1] < numTotalPages - 1"
        class="dots">
        <i class="fal fa-ellipsis-h c-gray-500"/>
      </div>
      <div
        v-if="numTotalPages >= 2"
        @click="onPage(numTotalPages)"
        class="page-number"
        :class="{
          'active': page === numTotalPages,
        }">
        {{ numTotalPages }}
      </div>
      <span
        @click="onClickRight"
        class="navigator"
        :class="{'disabled': page === numTotalPages}"
      >></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  perPage?: number // 전체 페이지 개수
  total?: number   // API response data상의 total (해당 쿼리로 검색된 전체 개수)
  page?: number    // API response data상의 page (현재 페이지)
}>(), {
  perPage: 10,
  total: 0,
  page: 1,
})

const emit = defineEmits(['page'])

const numTotalPages = computed(() => Math.ceil(props.total / props.perPage))

const onPage = (value: number) => emit('page', value)

const onClickLeft = () => {
  if (props.page <= 1) return

  onPage(props.page - 1)
}

const onClickRight = () => {
  if (props.page >= numTotalPages.value) return

  onPage(props.page + 1)
}

// 현재 페이지 양쪽으로 몇개까지나 보여줄지
const wingLength = computed(() => {
  return 2
})

const maxPages = wingLength.value * 2 + 1 // 전체 페이지 네이션에서 중앙을 기준으로 좌우에 wingLength 개씩 보여줌

const pageNumbers = computed(() => {
  if (numTotalPages.value <= maxPages) {
    return Array.from({ length: numTotalPages.value - 2 }, (_, i) => i + 2)
  }

  const arr = []
  const halfRange = wingLength.value // 좌우에 보여줄 페이지 개수
  let start = Math.max(2, props.page - halfRange)
  let end = Math.min(numTotalPages.value - 1, props.page + halfRange)

  // 앞쪽 페이지 범위 고정
  if (props.page <= wingLength.value + 1) {
    start = 2
    end = maxPages
  }
  
  // 뒤쪽 페이지 범위 고정
  if (props.page >= numTotalPages.value - wingLength.value) {
    start = numTotalPages.value - (maxPages - 1)
    end = numTotalPages.value - 1
  }

  for (let i = start; i <= end; i++) arr.push(i)

  return arr
})

</script>

<style lang="scss" scoped>
.app-pagination {
  .page-number-container {
    display: flex;
  }

  .page-numbers {
    display: flex;
    align-items: center;
    flex: 0 0;

    .navigator,
    .page-number,
    .dots {
      margin: 1px;
      min-width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
    }

    .dots {
      pointer-events: none;
    }

    .navigator,
    .page-number {
      &:hover {
        background: var(--border-base);
      }
    }

    .page-number {
      &.active {
        color: var(--primary);
        font-weight: 700;
      }
    }
  }

  .disabled {
    opacity: 0.5;
    pointer-events: none !important;
  }
}
</style>
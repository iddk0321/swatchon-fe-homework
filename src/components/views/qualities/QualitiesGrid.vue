<template>
  <div class="qualities-grid">
    <template v-if="loading">
      <AppSkeleton
        style="height: 270px;"
        :key="i"
        v-for="i in 12"
      />
    </template>
    <template v-else>
      <div
        class="quality-card"
        :key="quality.id"
        v-for="quality in qualities">
        <div class="img-container">
          <img :src="quality.image" :alt="quality.title" class="item-image" />
        </div>
        <div class="quality-info">
          <div class="code-and-products">
            <div class="quality-code">{{ quality.code }}</div>
            <div class="num-products">
              <img src="@/assets/images/colors.png" alt="Colors" />
              <span>{{ quality.numProducts }}</span>
            </div>
          </div>
          <div class="quality-title lines-1">{{ quality.title }}</div>
          <div class="quality-price">${{ quality.price }}</div>
          <div
            @click="addToCart"
            class="add-to-cart">
            + ADD TO CART
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import AppSkeleton from '@/components/app/AppSkeleton.vue'

defineProps<{
  qualities?: any
  loading?: boolean
}>()

const addToCart = () => {}
</script>

<style lang="scss" scoped>
.qualities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  .quality-card {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-base);
    user-select: none;

    .img-container {
      position: relative;
      padding-top: 100%;
    }

    .item-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .quality-info {
    padding: 12px;

    .code-and-products {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .quality-code {
        color: var(--text-light);
        font-weight: 500;
      }

      .num-products {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;

        img {
          width: 12px;
          height: 12px;
        }
      }
    }

    .quality-title {
      font-weight: 600;
    }

    .quality-price {
      font-size: 18px;
      font-weight: 700;
      margin-top: 8px;
    }

    .add-to-cart {
      padding: 4px 8px;
      border-radius: 4px;
      text-align: center;
      margin-top: 8px;
      border: 1px solid var(--black);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background: var(--border-base);
      }
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 479px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
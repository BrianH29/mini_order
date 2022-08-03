<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import { useCart } from '@/stores/cart.js';

defineProps({
  goodsTypeCount: {
    type: String,
    default: '1',
  },
});

const cartStore = useCart();
</script>

<template>
  <div class="goods-total-wrapper">
    <TextStyle
      :content="`총 ${goodsTypeCount}가지 ${cartStore.getTotalQuantity}개`"
      class="goods-total-wrapper-count"
    />
    <TextStyle
      :content="$commons.withComma(cartStore.getTotalPrice)"
      class="goods-total-wrapper-amount"
    />
  </div>
</template>

<style lang="scss" scoped>
.goods-total-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9.25vw 0 1.75vw;

  #{&}-count {
    @include textStyle(Pretendard, #2f2a26, 3.25vw, '');
  }

  #{&}-amount {
    @include textStyle(Pretendard, #4a5cff, 3.75vw, -0.09375vw);
  }
}
</style>

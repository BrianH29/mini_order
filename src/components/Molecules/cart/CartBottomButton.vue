<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';

const emit = defineEmits(['clickEvent']);
const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <div class="cart-bottom-btn">
    <TextStyle
      content="주문담기"
      class="cart-bottom-btn-close"
      @click="clickEvent('closeCart')"
    />
    <TextStyle
      content="주문하기"
      class="cart-bottom-btn-order"
      @click="clickEvent('order')"
    />
  </div>
</template>

<style lang="scss" scoped>
.cart-bottom-btn {
  display: flex;
  align-items: center;
  gap: 10px;

  #{&}-close {
    display: flex;
    align-items: center;
    justify-content: center;

    @include textStyle(Pretendard, #ffffff, 4.25vw, -0.2124vw);
    @include button(#999, 18.75vw, 11.5vw, 1.25vw);
  }

  #{&}-order {
    display: flex;
    align-items: center;
    justify-content: center;

    @include textStyle(Pretendard, #ffffff, 4.25vw, -0.2124vw);
    @include button(#4a5cff, 72.5vw, 11.5vw, 1.25vw);
  }
}
</style>

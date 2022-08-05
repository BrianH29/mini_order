<script setup>
import OneBottomButton from '@/components/Atom/OneBottomButton.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  price: {
    type: Number,
  },
});
</script>

<template>
  <OneBottomButton>
    <TextStyle
      :content="`주문담기${$commons.withComma(price)}`"
      class="one-bottom-btn-cart"
      @click="clickEvent('closeCart')"
    />
  </OneBottomButton>
</template>

<style lang="scss" scoped>
.one-bottom-btn {
  position: fixed;
  bottom: 0;
  width: 100%;

  #{&}-cart {
    display: flex;
    align-items: center;
    justify-content: center;

    @include textStyle(Pretendard, #ffffff, 4.25vw, -0.2124vw);
    @include button(#4a5cff, 100vw, 11.5vw, 0);
  }
}
</style>

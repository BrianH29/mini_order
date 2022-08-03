<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import IconWrapper from '@/components/Atom/IconWrapper.vue';

const emit = defineEmits(['clickEvent']);
const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <div class="goods-title-wrapper">
    <TextStyle content="장바구니" class="cart-title" />
    <IconWrapper
      icon="fa-solid fa-trash-can"
      @click="clickEvent('removeAll')"
    />
  </div>
</template>

<style lang="scss" scoped>
.goods-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.75vw 1vw;
}
.cart-title {
  @include textStyle(Pretendard, #2f2a26, 3.25vw, -0.08125vw);
}

.cart-empty {
  @include textStyle(Pretendard, #2f2a26, 3.25vw, -0.08125vw);
}
</style>

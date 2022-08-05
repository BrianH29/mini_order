<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import TwoButtomButton from '@/components/Atom/TwoButtomButton.vue';

const emit = defineEmits(['clickEvent']);
const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <TwoButtomButton>
    <TextStyle
      content="주문담기"
      class="bottom-btn-wrapper-close"
      @click="clickEvent('closeCart')"
    />
    <TextStyle
      content="주문하기"
      class="bottom-btn-wrapper-order"
      @click="clickEvent('order')"
    />
  </TwoButtomButton>
</template>

<style lang="scss" scoped>
.bottom-btn-wrapper {
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

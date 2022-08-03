<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import { useOrder } from '@/stores/order.js';

const orderStore = useOrder();
let num = orderStore.getOrderNumber;
</script>

<template>
  <div class="order-history-wrapper">
    <TextStyle content="주문합계" class="order-history-wrapper-title" />
    <TextStyle :content="num" class="order-history-wrapper-count" />
  </div>
</template>

<style lang="scss" scoped>
.order-history-wrapper {
  height: 13.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  background-color: #2f2a26;

  position: fixed;
  bottom: 0;
  width: 100vw;

  #{&}-title {
    @include textStyle(NotoSerifKR, #ffffff, 4.25vw, -0.2125vw);
  }

  #{&}-count {
    display: flex;
    justify-content: center;
    align-items: center;
    @include textStyle(NotoSerifKR, #000000, 3.25vw, -0.2125vw);
    @include button(#ffffff, 5.25vw, 5.25vw, 0.625vw);
  }
}
</style>

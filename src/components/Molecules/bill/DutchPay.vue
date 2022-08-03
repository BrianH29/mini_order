<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import CartQuantity from '../cart/CartQuantity.vue';
import { useOrder } from '@/stores/order.js';

const orderStore = useOrder();

const clickEvent = sort => {
  switch (sort) {
    case 'increase':
      orderStore.increasePerPerson();
      break;
    case 'decrease':
      orderStore.decreasePerPerson();
      break;
  }
};
</script>

<template>
  <div class="dutch-pay-wrapper">
    <TextStyle content="더치페이" class="title" />
    <CartQuantity
      :quantity="orderStore.getPerPerson"
      @clickEvent="clickEvent"
    />
  </div>
</template>

<style lang="scss" scoped>
.dutch-pay-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.125vw solid #ccc;
  padding: 0 5vw;
  height: 13.75vw;

  .title {
    @include textStyle(Pretendard, #2f2a26, 4.25vw, -0.10625vw);
  }
}
</style>

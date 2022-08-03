<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import { useOrder } from '@/stores/order.js';

const orderStore = useOrder();
</script>

<template>
  <div class="bill-total">
    <TextStyle content="총주문금액" />
    <TextStyle :content="$commons.withComma(orderStore.getTotalOrderPrice)" />
  </div>
</template>

<style lang="scss" scoped>
.bill-total {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include textStyle(Pretendard, #4a5cff, 3.5vw, -0.174vw);
}
</style>

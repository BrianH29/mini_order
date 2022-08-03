<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import { useOrder } from '@/stores/order.js';

const orderStore = useOrder();
</script>

<template>
  <div class="bill-result">
    <TextStyle content="1인당" class="bill-result-title" />
    <TextStyle
      :content="`${$commons.withComma(
        orderStore.getTotalOrderPrice / orderStore.getPerPerson,
      )}원`"
      class="bill-result-amount"
    />
  </div>
</template>

<style lang="scss" scoped>
.bill-result {
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

  #{&}-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    @include textStyle(NotoSerifKR, #ffffff, 4.25vw, -0.2125vw);
  }
}
</style>

<script setup>
import BillContent from '@/components/Molecules/bill/BillContent.vue';
import { useOrder } from '@/stores/order.js';
import BillTotalPrice from '@/components//Molecules/bill/BillTotalPrice.vue';

const orderStore = useOrder();
</script>

<template>
  <div class="bill-wrapper">
    <div
      class="bill-content-wrapper"
      v-for="(item, idx) in orderStore.getSaveOrder"
      :key="idx"
    >
      <div v-for="(goods, index) in item.item" :key="index">
        <BillContent
          :goodsName="goods.name"
          :goodsQuantity="goods.selectedCount"
          :goodsOriginPrice="goods.price"
        />
      </div>
    </div>
    <BillTotalPrice class="bill-total-wrapper" />
  </div>
</template>

<style lang="scss" scoped>
.bill-wrapper {
  height: calc(100vh - 38.75vw);
}
.bill-content-wrapper {
  padding: 0 5vw;
}
.bill-total-wrapper {
  padding: 2.9375vw 5vw;
}
</style>

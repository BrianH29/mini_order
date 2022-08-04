<script setup>
import OrderTime from '@/components/Molecules/order/OrderTime.vue';
import OrderContent from '@/components/Molecules/order/OrderContent.vue';
import { useOrder } from '@/stores/order.js';

const orderStore = useOrder();
let num = orderStore.getOrderNumber;
</script>

<template>
  <div
    class="order-content-wrapper"
    v-for="(item, idx) in orderStore.getSaveOrder"
    :key="idx"
  >
    <OrderTime
      :order="idx"
      :orderNum="num--"
      :orderTitle="idx === 0 ? '마지막 주문' : '이전 주문'"
      :orderTime="item.orderTime"
    />
    <div v-for="(goods, index) in item.item" :key="index">
      <OrderContent
        :goodsName="goods.name"
        :selectedCount="goods.selectedCount"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-content-wrapper {
  padding: 0 5vw;
  margin-top: 3.125vw;
  border-bottom: 0.125vw solid #ddd;
}
</style>

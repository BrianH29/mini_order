<script setup>
import MenuDetailHeader from '@/components/Organisms/MenuDetail/MenuDetailHeader.vue';
import MenuDetailTitle from '@/components/Organisms/MenuDetail/MenuDetailTitle.vue';
import MenuDetailPrice from '@/components/Organisms/MenuDetail/MenuDetailPrice.vue';
import MenuDetailBottomButton from '@/components/Organisms/MenuDetail/MenuDetailBottomButton.vue';

import { useMenuDetail } from '@/stores/menuDetail.js';
import { useOrder } from '@/stores/order.js';

const menuDetailStore = useMenuDetail();
const orderStore = useOrder();

const clickEvent = sort => {
  switch (sort) {
    case 'increase':
      menuDetailStore.increaseQuantity();
      break;
    case 'decrease':
      menuDetailStore.decreaseQuantity();
      break;
    case 'saveGoods':
      orderStore.setSaveOrder(menuDetailStore.menuDetail);
      menuDetailStore.menuDetail = [];
      break;
  }
};
</script>

<template>
  <MenuDetailHeader :img="menuDetailStore.getMenuImg" />
  <MenuDetailTitle
    :name="menuDetailStore.getMenuName"
    :description="menuDetailStore.getMenuDescription"
  />
  <MenuDetailPrice
    :price="menuDetailStore.getMinimumTotalPrice"
    :minQuantity="menuDetailStore.getQuantity"
    @clickEvent="clickEvent"
  />
  <MenuDetailBottomButton
    :price="menuDetailStore.getMinimumTotalPrice"
    @clickEvent="clickEvent('saveGoods')"
  />
</template>

<style lang="scss" scoped></style>

<script setup>
import MenuDetailHeader from '@/components/Organisms/MenuDetail/MenuDetailHeader.vue';
import MenuDetailTitle from '@/components/Organisms/MenuDetail/MenuDetailTitle.vue';
import MenuDetailPrice from '@/components/Organisms/MenuDetail/MenuDetailPrice.vue';
import MenuDetailBottomButton from '@/components/Organisms/MenuDetail/MenuDetailBottomButton.vue';

import { useMenuDetail } from '@/stores/menuDetail.js';
import { useToastPopup } from '@/stores/toastPopup.js';

import { useOrder } from '@/stores/order.js';

const menuDetailStore = useMenuDetail();
const toastStore = useToastPopup();
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
      toastStore.setToastPopup(`주문을 완료했습니다.`);
      orderStore.setSaveOrder([menuDetailStore.menuDetail]);
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

<script setup>
import MenuDetailHeader from '@/components/Organisms/MenuDetail/MenuDetailHeader.vue';
import MenuDetailTitle from '@/components/Organisms/MenuDetail/MenuDetailTitle.vue';
import MenuDetailPrice from '@/components/Organisms/MenuDetail/MenuDetailPrice.vue';
import { useMenuDetail } from '@/stores/menuDetail.js';

const menuDetailStore = useMenuDetail();
</script>

<template>
  <MenuDetailHeader :img="menuDetailStore.getMenuImg" />
  <MenuDetailTitle
    :name="menuDetailStore.getMenuName"
    :description="menuDetailStore.getMenuDescription"
  />
  <MenuDetailPrice
    :price="menuDetailStore.getMenuPrice"
    :minQuantity="menuDetailStore.getMenuMinQuantity"
  />
</template>

<style lang="scss" scoped></style>

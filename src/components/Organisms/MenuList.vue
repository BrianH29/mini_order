<script setup>
import Menu from '@/components/Molecules/menu/Menu.vue';
import MenuDivider from '@/components/Molecules/menu/MenuDivider.vue';
import SlidePopup from '@/components/Organisms/SlidePopup.vue';
import { useMenuSeparator } from '@/stores/menuSeparator.js';
import { useCart } from '@/stores/cart.js';
import { useCommon } from '@/stores/common.js';

const menuSeparatorStore = useMenuSeparator();
const cartStore = useCart();
const commonStore = useCommon();

const clickEvent = (item, opt) => {
  switch (opt) {
    case '상세설명':
      console.log('item , opt : ', item, opt);
      break;
    case '옵션':
      break;
    default:
      if (commonStore.getFooterShow) commonStore.setFooterShow(false);
      cartStore.setSlide(true);
      cartStore.saveGoods(item);
      break;
  }
};
</script>

<template>
  <SlidePopup
    :show="cartStore.showSlide"
    pages="CartWrapper"
    height="43.75vh"
  />
  <div
    class="menu"
    v-for="(item, idx) in menuSeparatorStore.separateCategory"
    :key="idx"
  >
    <MenuDivider :name="item.categoryName" />
    <div class="menu-list">
      <Menu :dataList="item" @clickEvent="clickEvent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  overflow: auto;

  #{&}-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.5vw;
    row-gap: 1.875vw;
    margin: 2.375vw 5vw;
  }
}
</style>

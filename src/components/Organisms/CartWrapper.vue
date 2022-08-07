<script setup>
import CartTitle from '@/components/Molecules/cart/CartTitle.vue';
import CartInfo from '@/components/Molecules/cart/CartInfo.vue';
import CartTotalAmount from '@/components/Molecules/cart/CartTotalAmount.vue';
import CartBottomButton from '@/components/Molecules/cart/CartBottomButton.vue';
import CallStaffBtn from '@/components/Molecules/CallStaffBtn.vue';

import { useCart } from '@/stores/cart.js';
import { useToastPopup } from '@/stores/toastPopup.js';
import { useCommon } from '@/stores/common.js';
import { useOrder } from '@/stores/order.js';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const cartStore = useCart();
const toastStore = useToastPopup();
const commonStore = useCommon();
const orderStore = useOrder();

const clickEvent = sort => {
  switch (sort) {
    case 'closeCart':
      if (!commonStore.getFooterShow) commonStore.setFooterShow(true);
      cartStore.setSlide(false);
      break;
    case 'order':
      if (!commonStore.getFooterShow) commonStore.setFooterShow(true);
      cartStore.setSlide(false);
      toastStore.setToastPopup(`주문을 완료했습니다.`);
      orderStore.setSaveOrder(cartStore.getSaveGoods);
      cartStore.cartList = [];
      break;
    case 'removeAll':
      cartStore.$reset();
      break;
  }
};
</script>

<template>
  <div class="cart-wrapper">
    <CallStaffBtn class="call-staff" />
    <CartTitle @clickEvent="clickEvent" />
    <swiper slides-per-view="auto" :space-between="10">
      <swiper-slide v-for="(item, idx) in cartStore.getSaveGoods" :key="idx">
        <CartInfo
          :goodsId="item.id"
          :goodsName="item.name"
          :goodsPrice="item.totalPrice"
          :goodsQuantity="item.selectedCount"
        />
      </swiper-slide>
    </swiper>
    <CartTotalAmount />
    <CartBottomButton @clickEvent="clickEvent" />
  </div>
</template>

<style lang="scss" scoped>
.cart-wrapper {
  height: 100vh;
  padding: 4.375vw 3.75vw;
}

.call-staff {
  position: absolute;
  right: 2.5vw;
  top: -20.75vw;
  width: 17vw;
  height: 17vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

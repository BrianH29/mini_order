<script setup>
import FooterButton from '@/components/Molecules/FooterButton.vue';
import CallStaffBtn from '@/components/Molecules/CallStaffBtn.vue';

import { useRouter } from 'vue-router';

const router = useRouter();
const clickEvent = sort => {
  switch (sort) {
    case 'history':
      router.push('/orderhistory');
      break;
    case 'bill':
      router.push('/billpage');
      break;
  }
};
</script>

<template>
  <div class="footer-wrapper">
    <FooterButton
      icon="fa-solid fa-list-check"
      content="주문내역"
      @clickEvent="clickEvent('history')"
    />
    <FooterButton
      icon="fa-solid fa-won-sign"
      content="계산서"
      @clickEvent="clickEvent('bill')"
    />
    <CallStaffBtn class="footer-call-staff" />
    <FooterButton icon="fa-solid fa-crown" content="이벤트" />
    <FooterButton icon="fa-solid fa-shopping-bag" content="장바구니" />
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 13.25vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-top: 0.125vw solid #ccc;
  padding: 0 12.5vw;
  box-sizing: border-box;
}

.footer-call-staff {
  margin-bottom: 7vw;
}
</style>

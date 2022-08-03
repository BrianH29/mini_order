<script setup>
// import MenuListWrapper from './components/Templates/MenuListWrapper.vue';
// import MainNavBar from './components/Templates/MainNavBar.vue';
import FooterWrapper from './components/Organisms/FooterWrapper.vue';
import ToastPopup from './components/Organisms/ToastPopup.vue';
import { useCommon } from '@/stores/common.js';

const commonStore = useCommon();
</script>

<template>
  <div class="container">
    <router-view></router-view>
    <FooterWrapper v-if="commonStore.getFooterShow" />
    <ToastPopup />
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>

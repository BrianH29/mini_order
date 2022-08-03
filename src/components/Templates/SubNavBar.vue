<script setup>
import NavBar from '@/components/Organisms/NavBar.vue';

defineProps({
  content: {
    type: String,
  },
});
</script>

<template>
  <div class="navBar-wrapper">
    <NavBar controlType="sub" :content="content" />
  </div>
</template>

<style lang="scss" scoped>
.navBar-wrapper {
  width: 100vw;
  height: 11.875vw;
  padding: 2.5vw;
  box-sizing: border-box;
  border-bottom: 0.125vw solid #dfdfdf;
}
</style>

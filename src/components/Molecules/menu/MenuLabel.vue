<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  content: {
    type: String,
  },
});
</script>

<template>
  <div class="menu-label">
    <TextStyle :content="content" />
  </div>
</template>

<style lang="scss" scoped>
.menu-label {
  width: 8.125vw;
  height: 3.25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @include textStyle(NotoSerifKR, #2f2a26, 1.75vw);
  @include border(0.125vw solid #2f2a26, 4.25vw, '');
}
</style>

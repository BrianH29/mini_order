<script setup>
import IconWrapper from '@/components/Atom/IconWrapper.vue';

const emit = defineEmits(['clickEvent']);

const clickEvent = () => {
  emit('clickEvent');
};
</script>

<template>
  <div class="call-staff-btn" @click="clickEvent">
    <IconWrapper
      icon="fa-bell"
      width="10.25vw"
      height="10.188vw"
      color="#ffffff"
      size="4x"
    />
  </div>
</template>

<style lang="scss" scoped>
.call-staff-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  @include button(#4a5cff, 17vw, 17vw, 3.75vw);
}
</style>

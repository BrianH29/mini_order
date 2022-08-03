<script setup>
defineProps({
  icon: {
    type: String,
  },
  color: {
    type: String,
    default: '#2b2d2f',
  },
  size: {
    type: String,
    default: '2x',
  },
});
</script>

<template>
  <font-awesome-icon :icon="icon" :size="size" :color="color" />
</template>

<style lang="scss" scoped>
.icon-size {
  width: 40px;
  height: 40px;
}
</style>

<script setup>
const emit = defineEmits(['clickEvent']);

const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <font-awesome-icon
    icon="fa-solid fa-bars"
    color="#ffffff"
    size="3x"
    @click="clickEvent('menu')"
  />
</template>

<style lang="scss" scoped>
.menu-icon {
  width: 4.625vw;
  height: 3vw;
}
</style>

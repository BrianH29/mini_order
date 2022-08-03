<script setup>
const emit = defineEmits(['clickEvent']);
defineProps({
  idx: {
    type: Number,
  },
  title: {
    type: String,
  },
  sort: {
    type: String,
  },
  img: {
    type: String,
  },
});

const clickEvent = (idx, sort) => {
  emit('clickEvent', idx, sort);
};
</script>

<template>
  <div class="button-wrapper">
    <img :src="`src/assets/image/${img}.svg`" alt="" />
    <div @click="clickEvent(idx, sort)">{{ title }}</div>
  </div>
</template>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.45vw;
  width: 64px;

  img {
    width: 26px;
  }
}
</style>

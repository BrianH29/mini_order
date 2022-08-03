<script setup>
defineProps({
  title: {
    type: String,
    default: 'Menu',
  },
});
</script>

<template>
  <div class="table-wrapper">
    <p class="table-wrapper-title">Table No.</p>
    <p class="table-wrapper-number">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 0.625vw;
  width: 17.5vw;
  height: 7.99875vw;

  #{&}-title {
    @include textStyle(Nanum Myeongjo, #ffffff, 1.75vw);
  }

  #{&}-number {
    @include textStyle(Pretendard, #ffffff, 4vw, -1.6px);
    font-weight: 700;
  }
}
</style>

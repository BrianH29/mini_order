<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div class="menu-info">
    <TextStyle :content="name" class="menu-info-name" />
    <TextStyle :content="description" class="menu-info-description" />
  </div>
</template>

<style lang="scss" scoped>
.menu-info {
  padding: 3vw 5vw 0;
  border-bottom: 0.125vw solid #ddd;

  #{&}-name {
    font-weight: 700;
    @include textStyle(Pretendard, #2b2b2f, 2rem, -1.2px);
  }

  #{&}-description {
    @include textStyle(Pretendard, #666666, 1.2rem, normal);
    margin: 2.2vw 0;
  }
}
</style>

<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  goodsName: {
    type: String,
  },
  selectedCount: {
    type: Number,
  },
});
</script>

<template>
  <div class="order-content">
    <TextStyle :content="goodsName" class="order-name" />
    <TextStyle :content="`${selectedCount}개`" class="order-quantity" />
  </div>
</template>

<style lang="scss" scoped>
.order-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.125vw 0 4.375vw;
  border-bottom: 0.125vw solid #ddd;

  .order-name {
    @include textStyle(Pretendard, #131313, 4vw, -0.2vw);
  }

  .order-quantity {
    @include textStyle(Pretendard, #131313, 3.75vw, -0.2vw);
  }
}
</style>

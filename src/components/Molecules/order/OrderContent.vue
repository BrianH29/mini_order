<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import TwoContentContainer from '@/components/Atom/TwoContentContainer.vue';

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
  <TwoContentContainer>
    <TextStyle :content="goodsName" class="order-name" />
    <TextStyle :content="`${selectedCount}개`" class="order-quantity" />
  </TwoContentContainer>
</template>

<style lang="scss" scoped>
.order-name {
  @include textStyle(Pretendard, #131313, 4vw, -0.2vw);
}

.order-quantity {
  @include textStyle(Pretendard, #131313, 3.75vw, -0.2vw);
}
</style>

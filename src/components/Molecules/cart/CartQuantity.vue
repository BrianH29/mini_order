<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import IconWrapper from '@/components/Atom/IconWrapper.vue';

defineProps({
  quantity: {
    type: Number,
  },
});

const emit = defineEmits(['clickEvent']);

const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <div class="quantity-wrapper">
    <IconWrapper
      class="quantity-wrapper-btn"
      icon="fa-regular fa-square-plus"
      @click="clickEvent('increase')"
      size="3x"
    />
    <TextStyle :content="`${quantity}개`" class="quantity-wrapper-text" />
    <IconWrapper
      class="quantity-wrapper-btn"
      icon="fa-regular fa-square-minus"
      @click="clickEvent('decrease')"
      size="3x"
    />
  </div>
</template>

<style lang="scss" scoped>
.quantity-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.25vw 2.75vw;

  #{&}-text {
    padding: 2vw;
    @include textStyle();
  }
}
</style>

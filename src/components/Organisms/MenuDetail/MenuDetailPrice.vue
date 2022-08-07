<script setup>
import TwoContentContainer from '@/components/Atom/TwoContentContainer.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';
import CartQuantity from '@/components/Molecules/cart/CartQuantity.vue';
import $commons from '@/utils/common.js';

defineProps({
  price: {
    type: Number,
  },
  minQuantity: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['clickEvent']);
const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <div class="menu-detail-price-wrapper">
    <TwoContentContainer>
      <TextStyle content="금액" class="price-title" />
      <TextStyle :content="`${$commons.withComma(price)}원`" class="price" />
    </TwoContentContainer>
    <TwoContentContainer>
      <TextStyle content="최소수량" class="quantity-title" />
      <CartQuantity :quantity="minQuantity" @clickEvent="clickEvent" />
    </TwoContentContainer>
  </div>
</template>

<style lang="scss" scoped>
.menu-detail-price-wrapper {
  padding: 0 5vw;
  border-bottom: 1.1vw solid #ddd;
}

.price-title,
.quantity-title {
  @include textStyle(Nanum Myeongjo, #2b2d2f, 1.5rem, normal);
}

.price {
  font-weight: 700;
  @include textStyle(NotoSerifKR, #2b2d2f, 2rem, normal);
}

.quantity-wrapper {
  margin: 0;
}
</style>

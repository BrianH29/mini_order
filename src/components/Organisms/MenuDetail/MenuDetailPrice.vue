<script setup>
import TwoContentContainer from '@/components/Molecules/TwoContentContainer.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';
import CartQuantity from '@/components/Molecules/cart/CartQuantity.vue';
import $commons from '@/utils/common.js';

defineProps({
  price: {
    type: String,
  },
  minQuantity: {
    type: String,
    default: '1',
  },
});
</script>

<template>
  <div class="menu-detail-price-wrapper">
    <TwoContentContainer>
      <TextStyle content="금액" class="price-title" />
      <TextStyle :content="$commons.withComma(price)" class="price" />
    </TwoContentContainer>
    <TwoContentContainer>
      <TextStyle content="수량" class="quantity-title" />
      <CartQuantity :quantity="minQuantity" />
    </TwoContentContainer>
  </div>
</template>

<style lang="scss" scoped>
.menu-detail-price-wrapper {
  padding: 0 5vw;
  border-bottom: 0.125vw solid #ddd;
}

.price-title,
.quantity-title {
  font-weight: 600;
  @include textStyle(Nanum Myeongjo, #2b2d2f, 2rem, normal);
}

.price {
  font-weight: 700;
  @include textStyle(NotoSerifKR, #2b2d2f, 2rem, normal);
}

.quantity-wrapper {
  margin: 0;
}
</style>

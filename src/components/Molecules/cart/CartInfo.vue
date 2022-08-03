<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import CartQuantity from './CartQuantity.vue';
import { useCart } from '@/stores/cart.js';
import { toRefs } from 'vue';

const cartStore = useCart();

const props = defineProps({
  goodsId: {
    type: String,
  },
  goodsName: {
    type: String,
  },
  goodsPrice: {
    type: Number,
  },
  goodsQuantity: {
    type: Number,
    default: 1,
  },
});

const { goodsId } = toRefs(props);

const clickEvent = sort => {
  switch (sort) {
    case 'increase':
      cartStore.increaseQuantity(goodsId.value);
      break;
    case 'decrease':
      cartStore.decreaseQuantity(goodsId.value);
      break;
    case 'remove':
      cartStore.deleteGoods(goodsId.value);
      break;
  }
};
</script>

<template>
  <div class="goods-info">
    <div class="goods-info-wrapper">
      <div class="remove-btn" @click="clickEvent('remove')">
        <font-awesome-icon icon="fa-solid fa-circle-minus" size="2x" />
      </div>
      <section class="goods-info-name">
        <TextStyle :content="goodsName" class="name" />
      </section>
      <section class="total-wrap">
        <TextStyle :content="$commons.withComma(goodsPrice)" class="price" />
        <CartQuantity :quantity="goodsQuantity" @clickEvent="clickEvent" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.goods-info {
  display: flex;

  #{&}-wrapper {
    position: relative;
    min-width: 27.5vw;
    height: 30.25vw;
    background-color: #f5f3f2;
    border-radius: 2.5vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
  }

  #{&}-name {
    padding-top: 4.375vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.625vw;
    box-sizing: border-box;
    width: 27.5vw;

    .name {
      padding: 0 2.75vw;
      word-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      line-height: 1.33;
      @include textStyle(Pretendard, #2f2a26, 2.625vw, -0.06625vw);
    }
  }
}

.remove-btn {
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 5.25vw;
    height: 5.25vw;
  }
}

.total-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .price {
    padding: 0 2.75vw;
    line-height: 1.1;
    @include textStyle(Pretendard, #2f2a26, 2.875vw, '');
  }
}
</style>

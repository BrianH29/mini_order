<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import $commons from '@/utils/common.js';
import { useOrder } from '@/stores/order.js';
import { toRefs } from 'vue';

const props = defineProps({
  goodsName: {
    type: String,
  },
  goodsQuantity: {
    type: Number,
  },
  goodsOriginPrice: {
    type: Number,
  },
});

const orderStore = useOrder();
const { goodsQuantity, goodsOriginPrice } = toRefs(props);
const totalPrice = () => goodsQuantity.value * goodsOriginPrice.value;

orderStore.setSaveTotalPrice(totalPrice());
</script>

<template>
  <div class="bill-content">
    <div class="bill-content-main">
      <TextStyle :content="goodsName" class="goods-name" />
      <section class="bill-goods">
        <TextStyle :content="`${goodsQuantity}개`" class="goods-quantity" />
        <TextStyle
          :content="$commons.withComma(totalPrice())"
          class="goods-total-price"
        />
      </section>
    </div>
    <div class="bill-content-sub">
      <TextStyle content="기본" class="goods-type" />
      <TextStyle
        :content="$commons.withComma(goodsOriginPrice)"
        class="goods-origin-price"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bill-content {
  padding: 3.725vw 0 4.375vw;
  border-bottom: 0.125vw solid #ddd;

  #{&}-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25vw;

    .goods-name {
      @include textStyle(Pretendard, #131313, 4vw, -0.2vw);
    }

    .bill-goods {
      display: flex;
      flex-direction: row;
      gap: 2.5vw;

      .goods-quantity {
        @include textStyle(Pretendard, #131313, 3.75vw, -0.2vw);
      }
      .goods-total-price {
        width: 18vw;
        text-align: right;
        @include textStyle(Pretendard, #131313, 3.75vw, -0.2vw);
      }
    }
  }

  #{&}-sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.375vw;
    @include textStyle(Nanum Myeongjo, #666, 2.75vw, normal);
  }
}
</style>

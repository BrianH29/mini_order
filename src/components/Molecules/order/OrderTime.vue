<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
defineProps({
  order: {
    type: Number,
  },
  orderNum: {
    type: Number,
  },
  orderTitle: {
    type: String,
  },
  orderTime: {
    type: String,
  },
});
</script>

<template>
  <div class="order-time-wrapper">
    <TextStyle
      :content="orderNum"
      class="order-num"
      :class="order === 0 ? 'num-active' : 'num-inactive'"
    />
    <TextStyle
      :content="orderTitle"
      :class="order === 0 ? 'active' : 'inactive'"
      class="order-title"
    />
    <TextStyle
      :content="orderTime"
      :class="order === 0 ? 'active' : 'inactive'"
      class="order-time"
    />
  </div>
</template>

<style lang="scss" scoped>
.order-time-wrapper {
  display: flex;
  align-items: center;
  gap: 2.125vw;

  .order-num {
    display: flex;
    justify-content: center;
    align-items: center;

    &.num-active {
      background: #4a5cff;
    }

    &.num-inactive {
      background: #999;
    }
    @include textStyle(Pretendard, #ffffff, 2.75vw, -0.06875vw);
    @include button('', 5.125vw, 5.125vw, 1.25vw);
  }

  .order-title {
    @include textStyle(Pretendard, '', 4vw, -0.2vw);
  }

  .order-time {
    flex: 1;
    text-align: right;
    @include textStyle(Pretendard, '', 3.25vw, -0.08125vw);
  }

  .active {
    color: #4a5cff;
  }

  .inactive {
    color: #999;
  }
}
</style>

<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';
import MenuLabel from './MenuLabel.vue';
import MenuOptionLabel from './MenuOptionLabel.vue';
import SoldOut from '@/components/Atom/SoldOut.vue';

defineProps({
  dataList: {
    type: Object,
  },
});

const emit = defineEmits(['clickEvent']);

const optionCheck = item => {
  if (item.description !== '' && item.optionGroups.length > 0) {
    return '옵션/상세설명';
  } else if (item.description === '' && item.optionGroups.length > 0) {
    return '옵션';
  } else if (item.description !== '' && item.optionGroups.length === 0) {
    return '상세설명';
  }
};

const clickEvent = item => {
  let opt = optionCheck(item);
  opt === undefined ? emit('clickEvent', item) : emit('clickEvent', item, opt);
};
</script>

<template>
  <div
    class="menu-wrapper"
    v-for="(item, idx) in dataList.items"
    :key="idx"
    @click="clickEvent(item)"
  >
    <div class="img-container">
      <img :src="item.image" alt="" />
      <SoldOut v-if="item.soldOut" />
    </div>
    <TextStyle :content="item.name" class="menu-wrapper-title" />
    <MenuOptionLabel
      v-if="item?.description || item?.optionGroups.length > 0"
      :content="optionCheck(item)"
    />
    <TextStyle
      :content="$commons.withComma(item.price)"
      class="menu-wrapper-price"
    />
    <section class="label-section">
      <MenuLabel v-if="item.best" content="BEST" />
      <MenuLabel v-if="item.hit" content="HIT" />
      <MenuLabel v-if="item.recommend" content="추천" />
      <MenuLabel v-if="item.new" content="신메뉴" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;

  .img-container {
    position: relative;

    img {
      width: 100%;
      height: 33.125vw;
      border-radius: 10px;
    }
  }

  #{&}-title {
    @include textStyle(Pretendard, #000000, 2.75vw, -0.5px);
  }
  #{&}-description {
    @include textStyle(Nanum Myeongjo, #000000, 2.75vw, -0.069vw);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  #{&}-price {
    @include textStyle(Pretendard, #000000, 3.125vw);
  }

  .label-section {
    display: flex;
    gap: 0.625vw;
  }
}
</style>

<script setup>
import Category from '@/components/Molecules/Category.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

defineProps({
  categoryType: {
    type: String,
  },
  data: {
    type: Object,
  },
});
</script>

<template>
  <swiper
    :class="
      categoryType === 'categories' ? 'category-list' : 'subCategories-list'
    "
    :space-between="10"
    slides-per-view="auto"
    :watch-slides-progress="true"
  >
    <swiper-slide
      class="swiper-customize"
      v-for="(item, idx) in data"
      :key="idx"
      style="width: fit-content"
    >
      <Category :buttonType="categoryType" :title="item.name" :idx="idx" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.swiper-slide {
  width: fit-content;
}

.swiper-slide-active {
  width: fit-content;
}
</style>

<style lang="scss" scoped>
.category-list {
  display: flex;
  margin: 5.375vw 5vw 1.875vw;
}
.subCategories-list {
  margin: 0 5vw;
}

.swiper-customize {
  display: flex;
  align-items: center;
  height: 55px;
}
</style>

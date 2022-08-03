<script setup="">
import SectionDivideBar from '@/components/Atom/SectionDivideBar.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  name: {
    type: String,
  },
});
</script>

<template>
  <TextStyle :content="name" class="category-name" />
  <SectionDivideBar />
</template>

<style lang="scss" scoped>
.category-name {
  margin: 1.125vw 5vw;
  @include textStyle(Pretendard, #2b2a26, 3vw, 1.3);
}
</style>

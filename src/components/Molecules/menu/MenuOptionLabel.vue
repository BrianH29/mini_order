<script setup>
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  content: {
    type: String,
  },
});

// const data = content.description;
</script>

<template>
  <div class="option-label">
    <TextStyle :content="content" />
  </div>
</template>

<style lang="scss" scoped>
.option-label {
  padding: 0.375vh 1vw;
  border-radius: 0.625vw;
  background-color: #2f2a26;
  @include textStyle(NotoSerifKR, #ffffff, 1.75vw);
}
</style>

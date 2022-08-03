<script setup>
import IconWrapper from '@/components/Atom/IconWrapper.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  icon: {
    type: String,
  },
  content: {
    type: String,
  },
});

const emit = defineEmits(['clickEvent']);

const clickEvent = () => {
  emit('clickEvent');
};
</script>

<template>
  <div class="footer-btn-wrapper" @click="clickEvent">
    <IconWrapper :icon="icon" />
    <TextStyle :content="content" class="footer-title" />
  </div>
</template>

<style lang="scss" scoped>
.footer-btn-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 9vw;
  gap: 1.45vw;
}
.footer-title {
  @include textStyle(Nanum Myeongjo, #2f2a26, 2.25vw, -0.9px);
}
</style>

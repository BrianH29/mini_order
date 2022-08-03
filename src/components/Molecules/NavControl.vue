<script setup>
import HamburgMenuBtn from '@/components/Atom/HamburgMenuBtn.vue';
import IconWrapper from '@/components/Atom/IconWrapper.vue';
import TextStyle from '@/components/Atom/TextStyle.vue';

defineProps({
  controlType: {
    type: String,
    default: 'main',
  },
});

const emit = defineEmits(['clickEvent']);
const clickEvent = sort => {
  emit('clickEvent', sort);
};
</script>

<template>
  <div class="nav-control" v-if="controlType === 'main'">
    <HamburgMenuBtn />
  </div>
  <div class="nav-control" v-else @click="clickEvent('history')">
    <IconWrapper icon="fa-solid fa-angle-left" size="3x" />
    <TextStyle />
  </div>
</template>

<style lang="scss" scoped>
.nav-control {
  display: flex;
  align-items: center;
  gap: 1.875vw;
}
</style>

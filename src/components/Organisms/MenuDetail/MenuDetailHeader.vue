<script setup>
import IconWrapper from '@/components/Atom/IconWrapper.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  img: {
    type: String,
  },
});

const clickEvent = sort => {
  switch (sort) {
    case 'goBack':
      router.go(-1);
      break;
  }
};
</script>

<template>
  <IconWrapper
    icon="fa-solid fa-angle-left"
    size="3x"
    color="white"
    class="back-btn"
    @click="clickEvent('goBack')"
  />
  <img :src="img" alt="" />
</template>

<style lang="scss" scoped>
.back-btn {
  position: absolute;
  padding: 3vw;
}

img {
  width: 100%;
}
</style>

<script setup>
import ButtonRadio from '@/components/Atom/ButtonRadio.vue';
import ButtonText from '@/components/Atom/ButtonText.vue';
defineProps({
  buttonType: {
    type: String,
  },
  title: {
    type: String,
  },
  idx: {
    type: Number,
  },
});
</script>

<template>
  <ButtonRadio
    v-if="buttonType === 'categories'"
    :name="buttonType"
    :value="title"
    :idx="idx"
  ></ButtonRadio>
  <ButtonText v-else :name="buttonType" :value="title" :idx="idx"></ButtonText>
</template>

<style lang="scss" scoped></style>

<script setup>
import TextDivideBar from '@/components/Atom/TextDivideBar.vue';

defineProps({
  value: {
    type: String,
  },
  name: {
    type: String,
  },
  idx: {
    type: Number,
  },
});

const emit = defineEmits(['clickEvent']);

const onChange = e => {
  emit('clickEvent', e.target.value);
};
</script>

<template>
  <input
    type="radio"
    :id="value"
    :value="value"
    :name="name"
    hidden="hidden"
    :checked="idx === 0"
    @change="onChange($event)"
  />
  <label :for="value">{{ value }}</label>
  <TextDivideBar />
</template>

<style lang="scss" scoped>
input[type='radio'] {
  display: none;
}

input[type='radio']:checked + label {
  display: inline-block;
  background-color: #4a5cff;
  @include textStyle(NotoSerifKR, white, 3vw);
  @include border(none, 4.25vw, 1.125vw 3.125vw);
}

label {
  display: inline-block;
  @include textStyle(NotoSerifKR, #2f2a26, 3vw);
}
</style>

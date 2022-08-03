<script setup>
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
</template>

<style lang="scss" scoped>
input[type='radio'] {
  display: none;
}

input[type='radio']:checked + label {
  background-color: #2f2a26;
  color: white;
}

label {
  @include textStyle(NotoSerifKR, #2f2a2b, 3.25vw);
  @include border(0.25vw solid #2f2a26, 4.25vw, 1.125vw 3.125vw);
}
</style>

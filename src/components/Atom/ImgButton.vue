<script setup>
defineProps({
  img: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
});
</script>

<template>
  <div>
    <img
      :src="`src/assets/image/${img}.svg`"
      alt=""
      :style="{ width: width, height: height }"
    />
  </div>
</template>

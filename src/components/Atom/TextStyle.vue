<script setup>
defineProps({
  content: {
    type: [String, Number],
  },
});
</script>

<template>
  <div>{{ content }}</div>
</template>

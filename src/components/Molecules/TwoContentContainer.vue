<script setup></script>

<template>
  <div class="content-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.125vw 0 4.375vw;
}
</style>

<script setup>
import NavBar from '@/components/Organisms/NavBar.vue';
import data from '../../data/data.json';
</script>

<template>
  <div class="navBar-wrapper">
    <NavBar
      controlType="main"
      :content="data.store.name"
      :tableNumber="data.table.title"
    />
  </div>
</template>

<style lang="scss" scoped>
.navBar-wrapper {
  background-color: #2f2a2b;
  background-position: 50%;

  width: 100vw;
  height: 46.5625vh;
  padding: 2.5vw;
  box-sizing: border-box;
}
</style>

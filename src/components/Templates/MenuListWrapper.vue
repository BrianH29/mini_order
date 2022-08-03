<script setup>
import MenuList from '@/components/Organisms/MenuList.vue';
import CategoryList from '@/components/Organisms/CategoryList.vue';
import { useMenuSeparator } from '@/stores/menuSeparator.js';

const store = useMenuSeparator();
store.dataSeparator();
</script>

<template>
  <div class="menu-list-wrapper">
    <CategoryList categoryType="categories" :data="store.categoriesList" />
    <CategoryList
      categoryType="subCategories"
      :data="store.subCategoriesList"
    />
    <MenuList />
  </div>
</template>

<style lang="scss" scoped>
.menu-list-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 88.3594vh;
  border-top-left-radius: 6.25vw;
  border-top-right-radius: 6.25vw;
  background-color: #fff;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
}
</style>

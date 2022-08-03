import { defineStore } from 'pinia';
import data from '../data/data.json';

export const useMenuSeparator = defineStore({
  id: 'menuSeparator',
  state: () => ({
    categoriesList: [],
    subCategoriesList: [],
    goodsList: [],
    separatedCategoryList: [],
  }),
  getters: {
    separateCategory() {
      for (const subId of this.subCategoriesList) {
        const items = this.goodsList.filter(data =>
          data.belongToCategories.includes(subId.id),
        );

        if (items.length) {
          this.separatedCategoryList = [
            ...this.separatedCategoryList,
            { categoryName: subId.name, items },
          ];
        }
      }
      return this.separatedCategoryList;
    },
  },
  actions: {
    dataSeparator() {
      this.goodsList = data.goods;
      this.subCategoriesList = data.subCategories;
      this.categoriesList = data.categories;
    },
  },
});

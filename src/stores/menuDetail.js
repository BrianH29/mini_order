import { defineStore } from 'pinia';

export const useMenuDetail = defineStore('useMenuDetail', {
  state: () => ({
    menuDetail: [],
  }),
  getters: {
    getMenuImg: state => state.menuDetail.image,
    getMenuName: state => state.menuDetail.name,
    getMenuDescription: state => state.menuDetail.description,
    getMenuPrice: state => state.menuDetail.price,
    getMenuMinQuantity: state => state.menuDetail.orderMinQuantity,
  },
  actions: {
    saveMenuDetail(data) {
      this.menuDetail = data;
    },
  },
});

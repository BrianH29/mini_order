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
    getQuantity: state => state.menuDetail.selectedCount,
    getMinimumTotalPrice: state =>
      state.menuDetail.price * state.menuDetail.selectedCount,
  },
  actions: {
    saveMenuDetail(data) {
      this.menuDetail = { ...data, selectedCount: data.orderMinQuantity };
    },
    increaseQuantity() {
      this.menuDetail.quantity < this.menuDetail.orderMaxQuantity
        ? ++this.menuDetail.selectedCount
        : this.menuDetail.selectedCount;
    },
    decreaseQuantity() {
      this.menuDetail.quantity > this.menuDetail.orderMinQuantity
        ? --this.menuDetail.selectedCount
        : this.menuDetail.selectedCount;
    },
  },
});

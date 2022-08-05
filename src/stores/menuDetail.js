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
    getQuantity: state => state.menuDetail.quantity,
    getMinimumTotalPrice: state =>
      state.menuDetail.price * state.menuDetail.quantity,
  },
  actions: {
    saveMenuDetail(data) {
      this.menuDetail = { ...data, quantity: data.orderMinQuantity };
    },
    increaseQuantity() {
      this.menuDetail.quantity < this.menuDetail.orderMaxQuantity
        ? ++this.menuDetail.quantity
        : this.menuDetail.quantity;
    },
    decreaseQuantity() {
      this.menuDetail.quantity > this.menuDetail.orderMinQuantity
        ? --this.menuDetail.quantity
        : this.menuDetail.quantity;
    },
  },
});

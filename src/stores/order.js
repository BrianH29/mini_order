import { defineStore } from 'pinia';
import { useCart } from './cart.js';
import $commons from '../utils/common.js';

export const useOrder = defineStore('useOrder', {
  state: () => ({
    saveOrder: [],
    totalOrderPrice: 0,
    perPerson: 1,
  }),
  getters: {
    getSaveOrder: state => state.saveOrder,
    getOrderNumber: state => state.saveOrder.length,
    getTotalOrderPrice: state => state.totalOrderPrice,
    getPerPerson: state => state.perPerson,
  },
  actions: {
    setSaveOrder() {
      const cartStore = useCart();
      if (this.saveOrder.length === 0) {
        this.saveOrder = [
          {
            orderTime: $commons.currentTime(),
            item: cartStore.getSaveGoods,
          },
        ];
      } else {
        this.saveOrder = [
          {
            orderTime: $commons.currentTime(),
            item: cartStore.getSaveGoods,
          },
          ...this.saveOrder,
        ];
      }
      cartStore.cartList = [];
    },
    setSaveTotalPrice(data) {
      this.totalOrderPrice += parseInt(data);
    },
    increasePerPerson() {
      ++this.perPerson;
    },
    decreasePerPerson() {
      if (--this.perPerson === 0) {
        ++this.perPerson;
      }
    },
  },
});

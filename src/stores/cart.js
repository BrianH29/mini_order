import { defineStore } from 'pinia';
import { useToastPopup } from './toastPopup.js';

export const useCart = defineStore({
  id: 'useCart',
  state: () => ({
    cartList: [],
    showSlide: false,
    totalPrice: 0,
    count: 1,
  }),
  getters: {
    getSaveGoods: state => state.cartList,
    getTotalPrice: state => state.totalPrice,
    getTotalQuantity: state => state.count,
  },
  actions: {
    saveGoods(data) {
      const toastStore = useToastPopup();
      console.log(data);

      const checkDuplicate = this.cartList.some(item => item.id === data.id);
      if (!checkDuplicate) {
        toastStore.setToastPopup(`장바구니에 ${data.name} 상품을 담았습니다.`);
        this.cartList = [
          ...this.cartList,
          { ...data, selectedCount: 1, totalPrice: data.price },
        ];
        this.totalPrice = data.price;
      } else {
        toastStore.setToastPopup(
          `장바구니에 ${data.name} 상품을 추가했습니다.`,
        );
        this.increaseQuantity(data.id);
      }
    },
    increaseQuantity(id) {
      const toastStore = useToastPopup();
      const item = this.cartList.find(item => item.id === id);

      let count = ++item.selectedCount;
      item.totalPrice = item.price + item.totalPrice;

      if (count > item.orderMaxQuantity) {
        --item.selectedCount;
        item.totalPrice = item.totalPrice - item.price;
        --count;
        toastStore.setToastPopup(`더 이상 수량을 추가할 수 없습니다.`);
      }

      this.totalPrice = item.totalPrice;
      this.count = count;
    },
    decreaseQuantity(id) {
      const item = this.cartList.find(item => item.id === id);

      const count = --item.selectedCount;
      item.totalPrice = item.totalPrice - item.price;
      if (count < 1) {
        this.setSlide(false);
        this.cartList = this.cartList.filter(item => item.id !== id);
      }

      this.totalPrice = this.totalPrice - item.totalPrice;
      this.count = this.count - count;
    },
    deleteGoods(id) {
      this.cartList = this.cartList.filter(item => item.id !== id);
      if (this.cartList.length <= 0) {
        this.setSlide(false);
      }
    },
    setSlide(type) {
      this.showSlide = type;
    },
  },
});

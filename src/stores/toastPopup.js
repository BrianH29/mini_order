import { defineStore } from 'pinia';

export const useToastPopup = defineStore({
  id: 'toastPopup',
  state: () => ({
    toastPopup: { popupContent: '' },
  }),
  getters: {
    getToastPopup() {
      return this.toastPopup.popupContent;
    },
  },
  actions: {
    setToastPopup(content) {
      this.toastPopup.popupContent = content;
    },
  },
});

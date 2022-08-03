import { defineStore } from 'pinia';

export const useCommon = defineStore('commonStore', {
  state: () => ({
    footer: true,
  }),
  getters: {
    getFooterShow: state => state.footer,
  },
  actions: {
    setFooterShow(data) {
      this.footer = data;
    },
  },
});

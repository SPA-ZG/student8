import { defineStore } from "pinia";

export const useLikesStore = defineStore("likes", {
  state: () => ({
    _totalLikes: 0,
  }),
  getters: {
    getTotalLikes: (state) => state._totalLikes,
  },
  actions: {
    incrementTotalLikes() {
      this._totalLikes += 1;
    },
  },
});

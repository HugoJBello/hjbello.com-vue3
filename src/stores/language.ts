import { defineStore } from "pinia";

export const useLanguage = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: "language",
  state: () => ({ language: "en"}),
  getters: {
    // automatically infers the return type as a number
    getLanguage(state): string {
      return state.language
    },
  },
  actions: {
    setLanguage(language: string) {
      this.language = language;
    },
  },
});
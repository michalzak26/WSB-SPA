import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(city) {
      if (!this.favorites.includes(city)) {
        this.favorites.push(city);
      }
    },
    removeFavorite(city) {
      this.favorites = this.favorites.filter((item) => item !== city);
    },
  },
});

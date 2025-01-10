<template>
  <div>
    <h1> Poniżej wpisz miasto</h1>
    <input v-model="city" placeholder="Wpisz miasto" @keyup.enter="getWeather" />
    <button @click="getWeather">Sprawdź pogodę</button>
    <button @click="addToFavorites" :disabled="!city || isCityFavorite">Dodaj do ulubionych</button>

    <div v-if="weatherData">
      <h2>Pogoda w {{ weatherData.location.name }}</h2>
      <p>Temperatura: {{ weatherData.current.temp_c }}°C</p>
      <p>Wilgotność: {{ weatherData.current.humidity }}%</p>
      <p>Prędkość wiatru: {{ weatherData.current.wind_kph }} kph</p>
      <p>Ciśnienie: {{ weatherData.current.pressure_in }} inHg</p>
      <p>Opis: {{ weatherData.current.condition.text }}</p>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <Favorites
      :favorites="favorites"
      @select="getWeatherForCity"
      @remove="removeFromFavorites"
    />
  </div>
</template>

<script>
import axios from "axios";
import Favorites from "./Favorites.vue";

export default {
  components: { Favorites },
  data() {
    return {
      city: "",
      weatherData: null,
      error: null,
      favorites: JSON.parse(localStorage.getItem("favorites")) || [], 
    };
  },
  computed: {
    isCityFavorite() {
      return this.favorites.includes(this.city);
    },
  },
  methods: {
    async getWeather() {
      const apiKey = "736e163e60e749e2b5b202648250801";
      if (!this.city) {
        this.error = "Proszę podać nazwę miasta.";
        return;
      }

      const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city}&aqi=no`;
      try {
        const response = await axios.get(weatherUrl);
        this.weatherData = response.data;
        this.error = null;
      } catch (error) {
        this.weatherData = null;
        this.error = "Nie udało się pobrać danych. Sprawdź nazwę miasta.";
      }
    },
    addToFavorites() {
      if (!this.isCityFavorite) {
        this.favorites.push(this.city);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
    },
    getWeatherForCity(city) {
      this.city = city;
      this.getWeather();
    },
    removeFromFavorites(city) {
      this.favorites = this.favorites.filter((fav) => fav !== city);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>


<template>
  <div>
    <h1>Ulubione lokalizacje</h1>
    <ul v-if="favorites && favorites.length > 0">
      <li v-for="city in favorites" :key="city">
        <span @click="selectCity(city)" class="city">{{ city }}</span>
        <button @click="removeCity(city)" class="remove">Usuń</button>
      </li>
    </ul>
    <p v-else>Brak ulubionych lokalizacji. Dodaj lokalizacje do listy!</p>
  </div>
</template>

<script>
export default {
  props: {
    favorites: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    selectCity(city) {
      this.$emit("select", city);
    },
    removeCity(city) {
      this.$emit("remove", city);
    },
  },
};
</script>

<style scoped>
.city {
  cursor: pointer;
  color: #4caf50;
  text-decoration: underline;
  margin-right: 10px;
}

 .remove {
  color: red;
  cursor: pointer;
  border: none;
  background: none;
}
</style>

<template>
  <div id="app">
    <header>
      <h1>Aplikacja Pogodowa</h1>
    </header>

    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2025 Aplikacja Pogodowa Michał 160855 CW6</p>
    </footer>
  </div>
</template>

<script>

import { ref } from 'vue';


export default {
  name: "App",
  setup() {
    const loading = ref(false);

    return { loading };
  },
};
</script>

<style scoped>

#app {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

header {
  background-color: #4caf50;
  color: white;
  padding: 1rem;
}

nav {
  margin: 1rem 0;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #4caf50;
}

footer {
  margin-top: 2rem;
  color: #777;
}
</style>

<template>
  <v-app>
    <AppBar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
  components: {
    AppBar,
  },
};
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

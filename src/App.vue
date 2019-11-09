<template>
  <v-app>
    <v-app-bar
      app
      color="#553344"
      dark
    >
      <v-toolbar-title>
        MiniAussieArt
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div id="nav">
<!--        <router-link to="/"><v-btn text>Home</v-btn></router-link>-->
<!--        <router-link to="/about"><v-btn text>About</v-btn></router-link>-->
<!--        <router-link to="/prices"><v-btn text>Prices</v-btn></router-link>-->
        <router-link to="/prices"><v-btn text>Prices</v-btn></router-link>
      </div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style>
  a {
    text-decoration: none;
  }
</style>

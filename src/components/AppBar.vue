<template>
  <div id="app-bar">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      stateless
      color="#553344"
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          link
          target="_blank"
          :href="link.url"
        >
          <v-list-item-action>
            <v-icon>mdi-open-in-new</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ link.platform }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      fixed
      inverted-scroll
      scroll-threshold="500"
      color="#553344"
    >
      <v-app-bar-nav-icon class="d-sm-none" @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        MiniAussieArt
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div id="nav" class="d-none d-sm-inline-flex">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          text
          target="_blank"
          :href="link.url"
        >
          {{ link.platform }}<v-icon class="ml-1">mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import links from '../data/links';

export default {
  name: 'AppBar',
  data: () => ({
    drawer: null,
    links,
  }),
};
</script>

<style scoped>

</style>

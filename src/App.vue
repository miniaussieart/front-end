<template>
  <v-app>
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
      color="#553344"
      dark
      fixed
      inverted-scroll
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
<!--        <router-link to="/"><v-btn text>Home</v-btn></router-link>-->
<!--        <router-link to="/about"><v-btn text>About</v-btn></router-link>-->
<!--        <router-link to="/prices"><v-btn text>Prices</v-btn></router-link>-->
      </div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      {
        platform: 'Patreon',
        url: 'https://www.patreon.com/MiniAussieArt',
        text: 'Become a Patron',
        icon: 'mdi-patreon',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/MiniAussieArt',
        text: 'Follow on Twitter',
        icon: 'mdi-twitter',
      },
      {
        platform: 'Picarto',
        url: 'https://picarto.tv/MiniAussie',
        text: 'Live Art Streams',
        icon: '$picarto',
      },
    ],
  }),
};
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

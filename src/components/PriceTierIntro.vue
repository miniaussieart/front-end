<template>
  <v-container fluid class="intro fill-height text-center">
    <v-row justify="center">
      <v-col
        col="12" md="8" lg="6"
      >
        <v-card
          elevation="12"
          class="pa-6"
          color="rgba(255, 255, 255, 0.7)"
        >
          <h1 class="my-4 display-1 font-weight-bold text-uppercase color-logo">
            <span>MiniAussie</span>
            <span class="color-logo-red">A</span>
            <span class="color-logo-green">r</span>
            <span class="color-logo-blue">t</span>
          </h1>
          <h2 class="headline my-4">●COMMISSION PRICES●</h2>
          <p class="intro-alert">{{ alert }}</p>
          <p class="custom-style-4">
            All listed prices are subject to increase depending on Character Complexity.<br>
            Simple backgrounds are
            <span class="color-highlight-green">included</span>
            in all commission types.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mb-8"
    >
      <v-col
        cols="12"
        md="8"
      >
        <v-row>
          <v-col
            cols="12"
            lg="4"
            v-for="(test, i) in links"
            :key="i"
          >
            <v-btn
              x-large
              dark
              target="_blank"
              :href="test.url"
              style="background-color: rgba(0, 0, 0, 0.5);"
            >
              <v-icon class="mr-3">{{ test.icon }}</v-icon>
              {{ test.text }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import links from '../data/links';

export default {
  name: 'PriceTierIntro',
  data: () => ({
    alert: 'Prices will increase January 2020.',
    links,
  }),
};
</script>

<style scoped>
  .color-logo {
    color: #50c0cd;
  }

  .color-logo-red {
    color: #ef5454;
  }

  .color-logo-blue {
    color: #4fb7e7;
  }

  .color-logo-green {
    color: #9bd33a;
  }

  .color-highlight-green {
    color: rgb(78, 154, 8);
  }

  .intro-alert {
    font-size: 0.8em;
  }
</style>

<template>
  <v-img
    src="https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/good-morn_orig.png"
  >
  <div class="prices">
    <div class="intro">
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
        >
          <v-col
            cols="12"
            md="8"
            lg="6"
          >
            <v-card
              color="rgba(255, 255, 255, 0.7)"
              elevation="12"
              class="pa-6"
            >
            <h1 class="display-1 my-4 color-logo text-uppercase">
              <span>MiniAussie</span>
              <span class="color-logo-red">A</span>
              <span class="color-logo-blue">r</span>
              <span class="color-logo-green">t</span>
            </h1>

            <h2 class="headline my-4">●COMMISSION PRICES●</h2>
            <p class="body-2 intro-alert">{{ alert }}</p>
            <p class="body-1 custom-style-4">
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
    </div>

    <PriceTierList></PriceTierList>
  </div>
  </v-img>
</template>

<script>
import PriceTierList from '../components/PriceTierList.vue';

export default {
  name: 'Prices',
  components: {
    PriceTierList,
  },
  data: () => ({
    alert: 'Prices will increase January 2020.',
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
    window: {
      width: 0,
      height: 0,
    },
  }),
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style scoped>
  .prices {
    background-size: cover;
    background-image: url('https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/good-morn_orig.png');
    background-attachment: fixed;
    background-position: center;
  }

  .intro {
    text-align: center;
    height: 100vh;
  }

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

  .display-1 {
    font-weight: 700;
  }

  svg {
    max-height: 24px;
  }
</style>

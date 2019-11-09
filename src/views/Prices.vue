<template>
  <v-img
    src="https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/good-morn_orig.png"
  >
  <div class="prices">
    <div class="intro">
      <v-container>
        <v-row justify="center">
          <v-col class="col-md-8">
            <v-card
              color="rgba(255, 255, 255, 0.7)"
              flat
              class="pa-4"
            >
            <h1 class="display-2 my-4 color-logo text-uppercase">
              <span>MiniAussie</span>
              <span class="color-logo-red">A</span>
              <span class="color-logo-blue">r</span>
              <span class="color-logo-green">t</span>
            </h1>

            <h2 class="display-1 my-4">●COMMISSION PRICES●</h2>
            <p class="body-2 intro-alert">{{ alert }}</p>
            <p class="body-1 custom-style-4">
              All listed prices are subject to increase depending on Character Complexity.
            </p>
            <p class="body-1 custom-style-5">
              Simple backgrounds are
              <span class="color-highlight-green">included</span>
              in all commission types.
            </p>
            </v-card>
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
    alert: 'Prices will increase January 2020',
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
    height: 80vh;
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

  h1 {
    font-size: 2.5em;
    font-weight: 700;
  }

  h2 {
    font-size: 2em;
    font-weight: 400;
  }

  .intro-alert {
    text-decoration: underline;
  }

  .custom-style-4 {
  }

  .custom-style-5 {
    text-decoration: underline;
  }

  .warning-alert {
    color: #d80000;
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
  }
</style>

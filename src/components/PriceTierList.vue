<template>
  <div class="price-tier-list">
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="fade-transition"
    >
      <v-card
        tile
        dark
        @click="dialog = false"
        :ripple="false"
      >
        <v-img
          :src="dialogSrc"
          :height="window.height"
          contain
        />
      </v-card>
    </v-dialog>

    <v-container>
      <div class="text-center white--text display-1 my-6">Commission Tiers</div>

      <v-row>
        <v-col
          v-for="tier in tierList"
          :key="tier.id"
          cols="12"
          md="12"
        >
          <v-card
            dark
            class="text-center pa-4"
            style="white-space: pre-wrap;"
            color="#444"
          >
            <v-card-title
              class="tier-title justify-center"
            >
              {{ tier.category }}
            </v-card-title>

            <p>{{ tier.price }}</p>
            <p v-if="tier.description">{{ tier.description }}</p>
            <p class="tier-alert" v-if="tier.alert">{{ tier.alert }}</p>

            <v-row class="px-2" align="center">
              <v-col
                v-for="example in tier.examples"
                :key="example.id"
                cols="4"
              >
                <v-card
                  hover
                  outlined
                >
                  <v-img
                    :src="example.src"
                    @click="openDialog(example)"
                    max-height="400px"
                    contain
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import tierList from '../data/tier-list.json';

export default {
  name: 'PriceTierList',
  data: () => ({
    count: 0,
    dialog: false,
    dialogSrc: '',
    dialogText: '',
    window: {
      width: 0,
      height: 0,
    },
    alert: 'Prices will increase November 2019',
    tierList,
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
    openDialog(example) {
      this.dialogSrc = example.src;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
  .price-tier-list {
    border-top: 2px solid black;
    background-color: #222;
  }

  .tier-title {
    font-size: 1.5em;
  }

  .tier-alert {
    color: #ef5454;
    text-shadow: 0 0 8px;
  }
</style>

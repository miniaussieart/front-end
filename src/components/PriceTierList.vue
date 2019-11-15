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
      <div class="text-center white--text"><h1>Commission Tiers</h1></div>

      <v-row>
        <v-col
          v-for="tier in tierList"
          :key="tier.id"
          cols="12"
          md="12"
        >
          <v-card
            class="text-center pa-4"
            style="white-space: pre-wrap;"
          >
            <v-card-title
              class="justify-center display-1 my-2"
            >{{ tier.category }}</v-card-title>

            <v-card-subtitle
              class="body-1 black--text"
            >{{ tier.price }}</v-card-subtitle>

            <v-card-text
              class="body-1 black--text"
            >
              <span v-if="tier.description">{{ tier.description }}</span>
              <span class="v-alert" v-if="tier.alert">{{ tier.alert }}</span>
            </v-card-text>

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
  background: rgba(42, 25, 34, 0.7);
  border-top: 2px solid black;
}
</style>

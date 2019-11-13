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
        >
          <v-card
            class="d-flex justify-center mt-6"
            color="transparent"
            flat
          >
            <v-card
              class="pa-2"
              color="rgb(0, 0, 0, 0.7)"
              outlined
              hidden
            >
              {{ dialogText }}
            </v-card>
          </v-card>
        </v-img>
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
            class="text-center"
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
              v-if="tier.description"
            >{{ tier.description }}</v-card-text>

            <v-row class="px-2">
              <v-col
                v-for="example in tier.examples"
                :key="example.id"
                cols="4"
              >
                <v-card
                  hover
                  outlined>
                  <v-img
                    :src="example.src"
                    @click="openDialog(example)"
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
      this.dialogText = example.text || 'Chibi Headshot, One Extra Character - $15';
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.price-tier-list {
  background: rgba(0, 0, 0, 0.7);
  border-top: 2px solid black;
}
</style>

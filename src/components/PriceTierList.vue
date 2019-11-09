<template>
  <div class="price-tier-list">
    <v-container>
      <v-dialog
        v-model="dialog"
        fullscreen
        transition="fade-transition"
      >
        <v-card tile dark v-on:click="dialog = false">
          <v-img
            :src="dialogSrc"
            :height="window.height"
            contain
          >
            <div>
              <v-card
                :class="`d-flex justify-center mt-6`"
                color="transparent"
                flat
              >
                <v-card
                  class="pa-2"
                  color="rgb(0, 0, 0, 0.7)"
                  outlined
                >
                  {{ dialogText }}
                </v-card>
              </v-card>
            </div>
          </v-img>
        </v-card>
      </v-dialog>

      <v-row>
        <v-col
          v-for="tier in tierList"
          :key="tier.id"
          cols="12"
          md="6"
        >
          <v-card>
            <v-card-title>{{ tier.category }}</v-card-title>
            <v-card-subtitle>{{ tier.minimumPrice }}</v-card-subtitle>
            <v-card-text>{{ tier.description }}</v-card-text>
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
    tierList: [
      {
        id: Math.random(),
        category: 'Chibi Headshots',
        minimumPrice: 'Starting at $8',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/newcanvas22_orig.png',
            text: 'Commissioned by DarkNightFox',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/becderp_orig.png',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/newcanvas21_orig.png',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Tsum Chibi',
        minimumPrice: 'Starting at $15',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/tay2_orig.png',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/beans_orig.png',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/newcanvas43_orig.png',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Chibi',
        minimumPrice: 'Starting at $25',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/newcanvas19_orig.png',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/newcanvas12_orig.png',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/gypsyraccoon_orig.png',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Animated Chibi',
        minimumPrice: 'Starting at $40',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/340485_orig.gif',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/lynxsero_orig.gif',
          },
          {
            src: 'https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/bean_orig.gif',
          },
        ],
      },
    ],
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
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.price-tier-list {
  background: rgba(20, 20, 20, 0.7);
}
</style>

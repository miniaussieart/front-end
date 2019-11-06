<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        v-for="tier in tierList"
        :key="tier.id"
        cols="12"
        sm="6"
      >
        <h1>{{ tier.category }}</h1>
        <p>{{ tier.minimumPrice }}</p>
        <p>{{ tier.description }}</p>
        <v-carousel>
          <v-carousel-item
            v-for="example in tier.examples"
            :key="example.id"
            :src="example.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PriceTierList',
  data: () => ({
    count: 0,
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
};
</script>

<style scoped>
  img {
    height: 100px;
    max-width: 200px;
  }
</style>

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
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435193/otters/d4ixxx1whrcxjrywizmw.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435175/otters/fwbtiixp54frxzmgteea.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570434515/otters/nyyrddarkk41wa6gtimr.jpg',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Chibi Headshots',
        minimumPrice: 'Starting at $8',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435193/otters/d4ixxx1whrcxjrywizmw.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435175/otters/fwbtiixp54frxzmgteea.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570434515/otters/nyyrddarkk41wa6gtimr.jpg',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Chibi Headshots',
        minimumPrice: 'Starting at $8',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435193/otters/d4ixxx1whrcxjrywizmw.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435175/otters/fwbtiixp54frxzmgteea.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570434515/otters/nyyrddarkk41wa6gtimr.jpg',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Chibi Headshots',
        minimumPrice: 'Starting at $8',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435193/otters/d4ixxx1whrcxjrywizmw.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435175/otters/fwbtiixp54frxzmgteea.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570434515/otters/nyyrddarkk41wa6gtimr.jpg',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Chibi Headshots',
        minimumPrice: 'Starting at $8',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435193/otters/d4ixxx1whrcxjrywizmw.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435175/otters/fwbtiixp54frxzmgteea.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570434515/otters/nyyrddarkk41wa6gtimr.jpg',
          },
        ],
      },
      {
        id: Math.random(),
        category: 'Chibi Headshots',
        minimumPrice: 'Starting at $8',
        description: 'Choose your style and render! Additional fee for multiple characters and complex designs.',
        examples: [
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435193/otters/d4ixxx1whrcxjrywizmw.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570435175/otters/fwbtiixp54frxzmgteea.jpg',
          },
          {
            src: 'https://res.cloudinary.com/dkjk6wkyc/image/upload/v1570434515/otters/nyyrddarkk41wa6gtimr.jpg',
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

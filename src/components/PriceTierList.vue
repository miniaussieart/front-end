<template>
<div class="price-tier-list">
  <ul>
    <li v-for="tier in tierList" v-bind:key="tier.id">
      <p>{{ tier.category }}</p>
      <p>{{ tier.minimumPrice }}</p>
      <p>{{ tier.description }}</p>
      <ul class="tier">
        <li v-for="example in tier.examples" v-bind:key="example.id">
          <img :src="example.src"/>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
export default {

  name: 'PriceTierList',
  data() {
    return {
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
      ],
    };
  },
};
</script>

<style scoped>
img {
  height: 100px;
  max-width: 200px;
}
</style>

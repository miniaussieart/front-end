<template>
  <div class="prices">
    <PriceTierIntro/>
    <PriceTierList/>
  </div>
</template>

<script>
import PriceTierIntro from '../components/PriceTierIntro.vue';
import PriceTierList from '../components/PriceTierList.vue';

export default {
  name: 'Prices',
  components: {
    PriceTierIntro,
    PriceTierList,
  },
};
</script>

<style scoped>
  .prices {
    height: 100vh;
    background-image: url('https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/good-morn_orig.png');
    background-position: center;
    background-size: cover;
  }
</style>

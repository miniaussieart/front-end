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
    background-size: cover;
    background-image: url('https://miniaussieart.weebly.com/uploads/1/2/2/6/122646358/good-morn_orig.png');
    background-attachment: fixed;
    background-position: center;
  }
</style>

<template>
  <div class="prices">
    <h1 class="custom-style-1 logo text-uppercase">
      <span>MiniAussie</span>
        <span class="logo-red">A</span>
        <span class="logo-blue">r</span>
        <span class="logo-green">t</span>
    </h1>

    <h2 class="custom-style-2">●COMMISSION PRICES●</h2>
    <p class="custom-style-3">{{ alert }}</p>
    <p class="custom-style-4">
      All listed prices are subject to increase depending on Character Complexity.
    </p>
    <p class="custom-style-5">
      Simple backgrounds are <span class="highlight-green">included</span> in all commission types.
    </p>
    <p class="custom-style-6">WEBSITE IS CURRENTLY UNDER CONSTRUCTION</p>

    <PriceTierList></PriceTierList>
  </div>
</template>

<script>
import PriceTierList from '../components/PriceTierList.vue';

export default {
  name: 'Prices',
  components: {
    PriceTierList,
  },
  data: () => ({
    alert: 'Prices will increase November 2019',
  }),
};
</script>

<style scoped>
  .prices {
    text-align: center;
  }

  .logo {
    color: #50c0cd;
  }

  .logo-red {
    color: #ef5454;
  }

  .logo-blue {
    color: #4fb7e7;
  }

  .logo-green {
    color: #9bd33a;
  }

  .highlight-green {
    color: rgb(78, 154, 8);
  }

  .custom-style-1 {}

  .custom-style-2 {
    color: #333333;
    font-size: 32px;
    font-weight: 400;
  }

  .custom-style-3 {
    color: #000000;
    font-size: 13px;
    font-weight: 400;
    text-decoration: underline;
  }

  .custom-style-4 {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
  }

  .custom-style-5 {
    color: #2a2a2a;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
  }

  .custom-style-6 {
    color: #d80000;
    font-size: 24px;
    font-weight: 700;
    text-decoration: underline;
  }
</style>

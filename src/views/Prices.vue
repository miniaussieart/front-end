<template>
  <div class="prices">
    <h1>MINIAUSSIEART</h1>

    <h2>●COMMISSION PRICES●</h2>
    <p>{{ alert }}</p>
    <p>All listed prices are subject to increase depending on Character Complexity.</p>
    <p>Simple backgrounds are included in all commission types.</p>
    <p>WEBSITE IS CURRENTLY UNDER CONSTRUCTION</p>

    <hr>

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
};
</script>

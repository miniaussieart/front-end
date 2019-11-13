import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import IconPicarto from '../components/icons/IconPicarto.vue';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      picarto: {
        component: IconPicarto,
      },
    },
  },
});

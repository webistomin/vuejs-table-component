import Vue from 'vue';
import App from './App';
import * as fb from 'firebase';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import store from './store';

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  validations: {},
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyDVBRH2EIXwG1HU7cET46FzRk56ewNaziU',
      authDomain: 'vuejs-table-component.firebaseapp.com',
      databaseURL: 'https://vuejs-table-component.firebaseio.com',
      projectId: 'vuejs-table-component',
      storageBucket: 'vuejs-table-component.appspot.com',
      messagingSenderId: '682193045380',
    });
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
  },
});

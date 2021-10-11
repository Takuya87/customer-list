import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvsa0roXa64eHyjOwWMWwhDAO8intJ5G4",
    authDomain: "my-address-p-7d43e.firebaseapp.com",
    projectId: "my-address-p-7d43e",
    storageBucket: "my-address-p-7d43e.appspot.com",
    messagingSenderId: "686326609408",
    appId: "1:686326609408:web:142ef0322836ae23f74ae5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
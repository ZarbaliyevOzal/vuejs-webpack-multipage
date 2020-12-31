import './styles.css';
import {createApp} from "vue";
import Example from './components/Example.vue';

let app = createApp({});
app.component('example', Example);
app.mount('#app');
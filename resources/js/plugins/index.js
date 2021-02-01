import './axios'
// import './fontawesome'
// import 'bootstrap'
import Vue from 'vue'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

// Vue.use(Buefy, {
//     defaultIconPack: 'fas',
// })

import Buefy from 'buefy'

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
    faFacebook,
    faGoogle
} from '@fortawesome/free-brands-svg-icons'

library.add(fas, faFacebook, faGoogle);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas",
    customIconPacks: {
        fas: {
            sizes: {
                default: "lg",
                "is-small": "1x",
                "is-medium": "2x",
                "is-large": "3x"
            },
            iconPrefix: ""
        }
    }
});

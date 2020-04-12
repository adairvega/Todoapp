import Vue from "nativescript-vue";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import {decode, encode} from 'base-64';

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

//Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <SignUp />
        </Frame>`,

    components: {
        Home,
        SignUp,
        SignIn,
    }
}).$start();

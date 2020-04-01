import Vue from "nativescript-vue";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

Vue.config.silent = false;

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

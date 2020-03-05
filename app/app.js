import Vue from "nativescript-vue";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

new Vue({

    template: `
        <Frame>
            <SignUp />
        </Frame>`,

    components: {
        Home,
        SignUp,
        SignIn
    }
}).$start();

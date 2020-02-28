import Vue from "nativescript-vue";
//import * as dialog from "ui/dialogs";
import { CouchDB } from "nativescript-couchdb";
import Home from "./components/Home";
import store from "./store";

/*let db = new CouchDB("https://couchdb.server/dbname", {
  "Authorization": "Basic base64\_encoded\_string"
});*/

new Vue({
    CouchDB,
    store,
    render: h => h("frame", [h(Home)])
}).$start();

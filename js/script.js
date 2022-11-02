console.log("pagina collegata");
import { contacts } from "/js/data.js";
console.log(contacts)
const {createApp}=Vue;

createApp({
    data (){
        return {
                working:"pagina"   
        }
    }
}).mount("#app");

import { defineStore } from "pinia";
import axios from "axios";


export const useContactStore = defineStore("ContactStore",{
    actions: {
        async addContact(contact){
            try{
                await axios.post('http://localhost:3000/Contact',contact);
            }catch(error){
                console.log(error.message)
            }
        }
    }
})
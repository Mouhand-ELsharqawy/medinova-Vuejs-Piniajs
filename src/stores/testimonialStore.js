import { defineStore } from "pinia";
import axios from "axios";


export const useTestimonialStore = defineStore("TestmonialStore", {
    state: () => ({
        isLoading: false,
        testimonials: []
    }),
    actions: {
        async getTestimonial(){
            try{
                this.isLoading = true;

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data;

                this.isLoading = false;
                this.testimonials = data;
            }catch(error){
                console.log(error.message);
            }
        }
    }
})
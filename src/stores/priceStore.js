import { defineStore } from "pinia";
import axios from "axios";


export const usePriceStore = defineStore("PriceStore", {
    state: () => ({
        isLoading: false,
        prices: []
    }),
    actions: {
        async getPrices(){
            try{
                this.isLoading = true;

                const res = await axios.get('http://localhost:3000/Price')
                const data = await res.data;

                this.isLoading = false;
                this.prices = data;
            }catch(error){
                console.log(error.message)
            }
        },


        async addPrice(price){
            try{
                this.isLoading = true;

                const res = await axios.post('http://localhost:3000/Price')
                const data = await res.data;

                this.isLoading = false;
                this.prices.push(data);
            }catch(error){
                console.log(error.message)
            }
        },

        async deletePrice(id){
            try{
                this.isLoading = true;
                await axios.delete('http://localhost:3000/Price/' + id)
                this.isLoading = false;
                this.prices = this.prices.splice(id,1)
            }catch(error){
                console.log(error.message)
            }
        }
    }
})
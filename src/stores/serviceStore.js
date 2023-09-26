import { defineStore } from "pinia";
import axios from "axios";

export const useServiceStore = defineStore("ServiceStore",{
    state: () => ({
        isLoading: false,
        services: []
    }),
    actions: {
        async getServices(){
            try{
                this.isLoading = true;

                // const res = await axios.get('http://localhost:3000/Service');
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const data = await res.data;

                this.isLoading = false;
                this.services = data
            }catch(error){
                console.log(error.message);
            }
        },

        async addService(service){
            try{
                this.isLoading = true;

                const res = await axios.post('http://localhost:3000/Service',service)
                const data = await res.data;

                this.isLoading = false;
                this.services.push(data);
            }catch(error){
                console.log(error.message);
            }
        },


        async getOneService(id){
            try{
                this.isLoading = true;

                // const res = await axios.get('http://localhost:3000/Service/'+id);
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
                const data = await res.data;

                this.isLoading = false;
                this.services = data;
            }catch(error){
                console.log(error.message);
            }
        },

        async updateService(service){
            try{
                this.isLoading = false;

                const res = await axios.patch('http://localhost:3000/Service/' + service.id, service.data)
                const data = await res.data;

                this.isLoading = false;
                this.services = this.services.splice(this.services[data.id],1,data);
            }catch(error){
                console.log(error.message);
            }
        },

        async deleteService(id){
            try{
                await axios.delete('http://localhost:3000/Service/' + id)
                this.services = this.services.splice(id,1);
            }catch(error){
                console.log(error.message);
            }
        }
    }
})
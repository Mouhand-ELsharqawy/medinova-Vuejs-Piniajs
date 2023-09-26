import { defineStore } from "pinia";
import axios from "axios";

export const useAppoinmentStore = defineStore("AppointmentStore",{
    state: ()=> ({
        isLoading: false,
        appoints: []
    }),
    actions: {
        async getAppointments(){
            try{
                this.isLoading = true;

                const res = await axios.get('http://localhost:3000/Oppointment')
                const data = await res.data;

                this.isLoading = false;
                this.appoints = data
            }catch(error){
                console.log(error.message);
            }
        },

        async addApointment(appointment){
            try{
                this.isLoading = true;

                const res = await axios.post('http://localhost:3000/Oppointment',appointment)
                const data = await res.data;

                this.isLoading = false;
                this.appoints.push(data);
            }catch(error){
                console.log(error.message);
            }
        }
    }
})
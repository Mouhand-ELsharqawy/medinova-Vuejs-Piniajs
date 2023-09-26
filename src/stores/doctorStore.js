import { defineStore } from "pinia";
import axios from "axios";

export const useDoctorStore = defineStore("DoctorStore",{
    state: () => ({
        isLoading: false,
        doctors: []
    }),
    actions: {
        async getDoctors(){
            try{
                this.isLoading = true;
                
                const res = await axios.get('http://localhost:3000/Doctor');
                const data = await res.data;

                this.isLoading = false;
                this.doctors = data;
            }catch(error){
                console.log(error.message)
            }
        },

        async addDoctor(doctor){
            try{
                this.isLoading = true;

                const res = await axios.post('http://localhost:3000/Doctor',doctor);
                const data = await res.data;

                this.isLoading = false;
                this.doctors.push(data);

            }catch(error){
                console.log(error.message)
            }
        },


        async getOneDoctor(id){
            try{
            this.isLoading = false;

            const res = await axios.get('http://localhost:3000/Doctor/'+id);
            const data = await res.data;

            this.isLoading = false;
            this.doctors = data;
            }catch(error){
                console.log(error.message)
            }
        },


        async updateDoctor(doctor){
            try{
                this.isLoading = true;

                const res = await axios.patch('http://localhost:3000/Doctor/' + doctor.id, doctor.data)
                const data = await res.data;

                this.isLoading = false;
                this.doctors = this.doctors.splice(this.doctors[data.id],1,data);
            }catch(error){
                console.log(error.message);
            }
        },

        async deleteDoctor(id){
            try{
                this.isLoading = true;

                 await axios.delete('http://localhost:3000/Doctor/'+id)
               

                this.isLoading = false;
                this.doctors = this.doctors.splice(id,1)
            }catch(error){
                console.log(error.message);
            }
        }
    }
})
<template>
   <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 500px;">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                <h1 class="display-4">Qualified Healthcare Professionals</h1>
            </div>
            <div class=" team-carousel position-relative" >
                <div class="team-item">
                    <div class="row g-0 bg-light rounded overflow-hidden">
                        <div class="col-12 col-sm-5 h-100">
                            <img class="img-fluid h-100" src= "../assets/img/team-1.jpg" style="object-fit: cover;">
                        </div>
                        <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div class="mt-auto p-4">
                                <h3>Doctor Name {{ doctors.name }}</h3>
                                <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist {{ doctors.profession }} </h6>
                                <p class="m-0"> {{ doctors.body }} </p>
                            </div>
                            <div class="d-flex mt-auto border-top p-4">
                                <router-link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to ="#"><i class="fab fa-twitter"></i></router-link>
                                <router-link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to ="#"><i class="fab fa-facebook-f"></i></router-link>
                                <router-link class="btn btn-lg btn-primary btn-lg-square rounded-circle" to ="#"><i class="fab fa-linkedin-in"></i></router-link>
                                <router-link to ="" class="btn btn-primary rounded-pill py-3 px-5 my-2" @click="doctorStore.deleteDoctor(doctors.id)"> Delete Doctor </router-link>
                                <router-link :to = "{ name: 'UpdateView', query: { id: doctors.id} }"  class="btn btn-primary rounded-pill py-3 px-5 my-2" > Update Doctor </router-link>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { useDoctorStore } from '@/stores/doctorStore'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import UpdateView from './UpdateView.vue';
export default {
    setup(){
        const doctorStore = useDoctorStore();
        const { isLoading, doctors } = storeToRefs(doctorStore)

        const route = useRoute()
        const id = route.query.id;

        
        onMounted(() => doctorStore.getOneDoctor(id))

        return {
            doctors, doctorStore
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 500px;">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                <h1 class="display-4">Qualified Healthcare Professionals</h1>
            </div>
            <div class=" team-carousel position-relative" v-for="doctor in doctors" :key="doctor.id">
                <div class="team-item">
                    <div class="row g-0 bg-light rounded overflow-hidden">
                        <div class="col-12 col-sm-5 h-100">
                            <img class="img-fluid h-100" src= "../assets/img/team-1.jpg" style="object-fit: cover;">
                        </div>
                        <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div class="mt-auto p-4">
                                <h3>Doctor Name {{ doctor.name }}</h3>
                                <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist {{ doctor.profession }} </h6>
                                <p class="m-0"> {{ doctor.body }} </p>
                            </div>
                            <div class="d-flex mt-auto border-top p-4">
                                <router-link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to ="#"><i class="fab fa-twitter"></i></router-link>
                                <router-link class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" to ="#"><i class="fab fa-facebook-f"></i></router-link>
                                <router-link class="btn btn-lg btn-primary btn-lg-square rounded-circle" to ="#"><i class="fab fa-linkedin-in"></i></router-link>
                            </div>
                            <div class="d-flex mt-auto border-top p-4">
                                <router-link :to="{name: 'SingleDoctor',query: {id: doctor.id} }"></router-link>
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
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
export default {
    setup(){
        const doctorStore = useDoctorStore();
        const { isLoading, doctors } = storeToRefs(doctorStore)
        onMounted(() => doctorStore.getDoctors());
    }
}
</script>

<style>

</style>
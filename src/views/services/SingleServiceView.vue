<template>
 <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 500px;">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                <h1 class="display-4">Excellent Medical Services</h1>
            </div>
            <div class="row g-5" >
                <div class="col-lg-4 col-md-6" >
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon mb-4">
                            <i class="fa fa-2x fa-user-md text-white"></i>
                        </div>
                        <h4 class="mb-3"> {{ services.title }} </h4>
                        <p class="m-0"> {{ services.body }} </p>
                        <div class="col-12">
                        <router-link class="btn btn-lg btn-primary rounded-pill" 
                        :to ="{ name: 'UpdateService', query: {id: services.id} }">
                        Update
                        </router-link>
                            <button class="btn btn-primary w-100 py-3" 
                            @click="serviceStore.deleteService(services.id)"> Delete </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>


<script setup>
import { useServiceStore } from "@/stores/serviceStore";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

    const serviceStore = useServiceStore()
    const router = useRouter()
    const route = useRoute();
    const id = route.query.id;
    

    const { isLoading, services } = storeToRefs(serviceStore);
</script>

<style>

</style>
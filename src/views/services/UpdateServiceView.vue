<template>
    <div class="col-lg-6">
                     <div class="bg-light text-center rounded p-5">
                         <h1 class="mb-4">Update service </h1>
                         <form @submit.prevent="handleSubmit">
                             <div class="row g-3">
                                 <div class="col-12 col-sm-6">
                                     <input type="text" 
                                     class="form-control bg-white border-0" 
                                     placeholder="Service Title" 
                                     style="height: 55px;"
                                     v-model="title">
                                 </div>
                                 <div class="col-12 col-sm-6">
                                     <input type="text" 
                                     class="form-control bg-white border-0" 
                                     placeholder="Service Description" 
                                     style="height: 55px;"
                                     v-model="body">
                                 </div>
                                 
                                 <div class="col-12">
                                     <button class="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                 </div>
                             </div>
                         </form>
                     </div>
                 </div>
 </template>
 
 <script setup>
 import { useServiceStore } from "@/stores/serviceStore";
 import { ref } from "vue";
 import { useRoute, useRouter } from "vue-router";
 
     const serviceStore = useServiceStore();
     const router = useRouter()
     const route = useRoute();


     const id = route.query.id

     const title = ref('')
     const body = ref('')
 
     const handleSubmit = () =>{
         const data = {
             title: title,
             body: body
         }

         const service = {
            id: id,
            data: data
         }
         serviceStore.updateService(service)
         router.push('/service')
     }
 </script>
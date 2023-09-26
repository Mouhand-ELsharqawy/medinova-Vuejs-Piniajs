<template>
   <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="mb-4">
                        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Appointment</h5>
                        <h1 class="display-4">Make An Appointment For Your Family</h1>
                    </div>
                    <p class="mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    <router-link class="btn btn-primary rounded-pill py-3 px-5 me-3" to="">Find Doctor</router-link>
                    <router-link class="btn btn-outline-primary rounded-pill py-3 px-5" to="">Read More</router-link>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody v-for="appoint in appoints" :key=" appoint.id ">
                    <tr>
                    <td> {{ appoint.department }} </td>
                    <td> {{ appoint.doctor }} </td>
                    <td> {{ appoint.name }} </td>
                    <td> {{ appoint.email }} </td>
                    <td> {{ appoint.date }} </td>
                    <td> {{ appoint.time }} </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
</template>

<script>
import { useAppoinmentStore } from '@/stores/appointmentStore'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
export default {
    setup(){
        const appoinmentStore = useAppoinmentStore();
        onMounted(()=> appoinmentStore.getAppointments())
        const { isLoading, appoints } = storeToRefs(appoinmentStore);
        return {
            isLoading, appoints
        }
    }
}
</script>

<style>

</style>
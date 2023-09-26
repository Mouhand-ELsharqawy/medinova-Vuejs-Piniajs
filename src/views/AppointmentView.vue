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
                <div class="col-lg-6">
                    <div class="bg-light text-center rounded p-5">
                        <h1 class="mb-4">Book An Appointment</h1>
                        <form @submit.prevent="handleSubmit">
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <select v-model="department" class="form-select bg-white border-0" style="height: 55px;">
                                        <option selected>Choose Department</option>
                                        <option value="1">Department 1</option>
                                        <option value="2">Department 2</option>
                                        <option value="3">Department 3</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <select v-model="doctor" class="form-select bg-white border-0" style="height: 55px;">
                                        <option selected>Select Doctor</option>
                                        <option value="1">Doctor 1</option>
                                        <option value="2">Doctor 2</option>
                                        <option value="3">Doctor 3</option>
                                    </select>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input v-model="name" type="text" class="form-control bg-white border-0" placeholder="Your Name" style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input v-model="email" type="email" class="form-control bg-white border-0" placeholder="Your Email" style="height: 55px;">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="date" id="date" data-target-input="nearest">
                                        <input type="text"
                                            class="form-control bg-white border-0 datetimepicker-input"
                                            placeholder="Date" 
                                            data-target="#date" 
                                            data-toggle="datetimepicker" 
                                            style="height: 55px;"
                                            v-model="date">
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="time" id="time" data-target-input="nearest">
                                        <input type="text"
                                            class="form-control bg-white border-0 datetimepicker-input"
                                            placeholder="Time" 
                                            data-target="#time" 
                                            data-toggle="datetimepicker" 
                                            style="height: 55px;"
                                            v-model="time">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAppoinmentStore } from '@/stores/appointmentStore';
import { useRouter } from 'vue-router';
export default {
    setup(){
        const appointmentStore = useAppoinmentStore()
        const  router = useRouter();


        const department = ref('');
        const doctor = ref('');
        const name = ref('');
        const email = ref('');
        const date = ref('');
        const time = ref('');

        const handleSubmit = () => {
            const data = {
                department: department,
                doctor: doctor,
                name: name,
                email: email,
                date: date,
                time: time
            }
            appointmentStore.addApointment(data);
            router.push('/')
        }


        return {
            department, doctor, name, email, date, time, handleSubmit
        }
    }
}
</script>

<style>

</style>
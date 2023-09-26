<template>
  <div class="col-lg-6">
                    <div class="bg-light text-center rounded p-5">
                        <h1 class="mb-4">New Doctor </h1>
                        <form @submit.prevent="handleSubmit">
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input type="text" 
                                    class="form-control bg-white border-0" 
                                    placeholder="Doctor Name" 
                                    style="height: 55px;"
                                    v-model="name">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="text" 
                                    class="form-control bg-white border-0" 
                                    placeholder="Profession" 
                                    style="height: 55px;"
                                    v-model="profession">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="text" 
                                    class="form-control bg-white border-0" 
                                    placeholder="Description" 
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

<script>
import { ref } from 'vue'
import { useDoctorStore } from '@/stores/doctorStore'
import { useRouter } from 'vue-router';
export default {
    setup(){
        const doctorStore = useDoctorStore();
        const router = useRouter();

        const name  = ref('')
        const profession = ref('')
        const body = ref('')

        const handleSubmit = () => {
            const data = {
                name: name,
                profession: profession,
                body: body
            }

            doctorStore.addDoctor(data);
            router.push('/team')
        }

        return {
            handleSubmit, name, profession, body
        }
    }
}
</script>

<style>

</style>
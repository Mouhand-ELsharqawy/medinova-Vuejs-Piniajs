<template>
  <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 500px;">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Packages</h5>
                <h1 class="display-4">Awesome Medical Programs</h1>
            </div>
            <div class="price-carousel position-relative" style="padding: 0 45px 45px 45px;"
            v-for="pric in prices" :key="pric.id" >
                <div class="bg-light rounded text-center">
                    <div class="position-relative">
                        <img class="img-fluid rounded-top" src= "../assets/img/price-4.jpg" alt="">
                        <div class="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style="background: rgba(29, 42, 77, .8);">
                            <h3 class="text-primary"> {{ pric.type }} </h3>
                            <h3 class="text-primary"> {{ pric.name }} </h3>
                            <h1 class="display-4 text-white mb-0">
                                <small class="align-top fw-normal" style="font-size: 22px; line-height: 45px;">$</small> {{ pric.price }} <small class="align-bottom fw-normal" style="font-size: 16px; line-height: 40px;">/ Year</small>
                            </h1>
                        </div>
                    </div>
                    <div class="text-center py-5">
                        <p>Emergency Medical Treatment</p>
                        <p>Highly Experienced Doctors</p>
                        <p>Highest Success Rate</p>
                        <p>Telephone Service</p>
                        <router-link to ="" class="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</router-link>
                        <router-link to ="" @click="priceStore.deletePrice(pric.id)" class="btn btn-primary rounded-pill py-3 px-5 my-2"> Delete </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                    <div class="bg-light text-center rounded p-5">
                        <h1 class="mb-4">Book An Appointment For Doctor </h1>
                        <form @submit.prevent="handleSubmit">
                            <div class="row g-3">
                                <div class="col-12 col-sm-6">
                                    <input type="text" 
                                    class="form-control bg-white border-0" 
                                    placeholder="Program Type" 
                                    style="height: 55px;"
                                    v-model="type">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="text" 
                                    class="form-control bg-white border-0" 
                                    placeholder="Price" 
                                    style="height: 55px;"
                                    v-model="price">
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input type="text" 
                                    class="form-control bg-white border-0" 
                                    placeholder="Doctor Name" 
                                    style="height: 55px;"
                                    v-model="name">
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
</template>

<script>
import { usePriceStore } from '@/stores/priceStore';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

export default {
    setup(){
        const priceStore = usePriceStore();
        const router = useRouter();

        const name = ref('');
        const type = ref('');
        const price = ref('');

        const { isLoading, prices } = storeToRefs(priceStore) 
        onMounted(() => priceStore.getPrices())

        const handleSubmit = () => {
            const data = {
                name: name,
                type: type,
                price: price
            }

            priceStore.addPrice(data)
            router.push('/price');
        }

        return {
            name, type, price, handleSubmit, prices, priceStore
        }
    }
}
</script>

<style>

</style>
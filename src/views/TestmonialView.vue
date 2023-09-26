<template>
  <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" >
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                <h1 class="display-4">Patients Say About Our Services</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class=" testimonial-carousel" v-for="test in testimonials" :key="test.id">
                        <div class="testimonial-item text-center">
                            <h3>Patient Name {{ test.title }}</h3>
                            <h6 class="fw-normal text-primary mb-3">Profession</h6>
                            <div class="position-relative mb-5">
                                <img class="img-fluid rounded-circle mx-auto" src= "../assets/img/testimonial-1.jpg" alt="">
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style="width: 60px; height: 60px;">
                                    <i class="fa fa-quote-left fa-2x text-primary"></i>
                                </div>
                            </div>
                            <hr class="w-25 mx-auto">
                            <p class="fs-4 fw-normal"> {{ test.body }} </p>
                        </div>
                        
                    </div>
                </div>
            </div>
       </div>
       </div>
</template>

<script>
import { useTestimonialStore } from '@/stores/testimonialStore'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
export default {
    setup(){
        const testimonialStore = useTestimonialStore();
        const { isLoading, testimonials } = storeToRefs(testimonialStore)

        onMounted(() => testimonialStore.getTestimonial())
        return {
            testimonials
        }
    }
}
</script>

<style>

</style>
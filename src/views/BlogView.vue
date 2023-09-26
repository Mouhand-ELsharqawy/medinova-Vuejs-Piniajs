<template>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5" style="max-width: 500px;">
                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
                <h1 class="display-4">Our Latest Medical Blog Posts</h1>
            </div>
            <div class="row g-5" >
                <div class="col-xl-4 col-lg-6" v-for="blog in blogs" :key="blog.id"  >
                    <div class="bg-light rounded overflow-hidden">
                        <img class="img-fluid w-100" src= "../assets/img/blog-1.jpg" alt="">
                        <div class="p-4">
                            <router-link class="h3 d-block mb-3" to ="">{{  blog.title  }}</router-link>
                            <p class="m-0"> {{ blog.body }} </p>
                        </div>
                        <div class="d-flex justify-content-between border-top p-4">
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle me-2" src= "../assets/img/user.jpg" width="25" height="25" alt="">
                                <small>John Doe</small>
                            </div>
                            <div class="d-flex align-items-center">
                                <small class="ms-3"><i class="far fa-eye text-primary me-1"></i>12345</small>
                                <small class="ms-3"><i class="far fa-comment text-primary me-1"></i>123</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useBlogStore } from '@/stores/blogStore'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
export default {
    setup(){
        const blogStore = useBlogStore();
        onMounted(() => blogStore.getBlogs())

        const { isLoading, blogs } = storeToRefs(blogStore);
        return {
            isLoading, blogs
        }
    }
}
</script>

<style>

</style>
import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore("BlogStore",{
    state: () => ({
        blogs: [],
        isLoading: false
    }),
    actions: {
        async getBlogs(){
            try{
            this.isLoading = true;

            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = await res.data;

            this.isLoading = false;
            this.blogs = data;
            }catch(error){
                console.log(error.message)
            }
        }
    }
})
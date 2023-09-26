import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import BlogView from '../views/BlogView.vue'
import ContactView from '../views/ContactView.vue'
import DetailView from '../views/DetailView.vue'
import PriceView from '../views/PriceView.vue'
import SearchView from '../views/SearchView.vue'
import ServiceView from '../views/ServiceView.vue'
import TeamView from '../views/TeamView.vue'
import TestmonialView from '../views/TestmonialView.vue'
import AllAppointment from '../views/AllAppointmentView.vue'
import AddDoctor from '../views/doctors/AddDoctorView.vue'
import SingleView from '../views/doctors/SingleView.vue'
import UpdateView from '../views/doctors/UpdateView.vue'
import AddServiceView from '../views/services/AddServiceView.vue'
import SingleServiceView from '../views/services/SingleServiceView.vue'
import UpdateServiceView from '../views/services/UpdateServiceView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: AppointmentView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailView
  },
  {
    path: '/price',
    name: 'Price',
    component: PriceView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/service',
    name: 'Service',
    component: ServiceView
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView
  },
  {
    path: '/testimonial',
    name: 'Testmonial',
    component: TestmonialView
  },
  {
    path: '/allappointment',
    name: 'AllAppointment',
    component: AllAppointment
  },
  {
    path: '/adddoctor',
    name: 'AddDoctor',
    component: AddDoctor
  },
  {
    path: '/singledoctor',
    name: 'SingleDoctor',
    component: SingleView
  },
  {
    path: '/updatedoctor',
    name: 'UpdateDoctor',
    component: UpdateView
  },
  {
    path: '/addservice',
    name: 'AddService',
    component: AddServiceView
  },
  {
    path: '/singleservice',
    name: 'SingleService',
    component: SingleServiceView
  },
  {
    path: '/updateservice',
    name: 'UpdateService',
    component: UpdateServiceView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

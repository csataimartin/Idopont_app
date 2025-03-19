import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Booking from "../views/Booking.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/booking", name: "BookingForm", component: Booking }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
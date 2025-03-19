import { defineStore } from "pinia";
import axios from "axios";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    bookings: [],
  }),
  actions: {
    async fetchBookings() {
      try {
        const response = await axios.get("http://localhost:3000/bookings");
        this.bookings = response.data;
      } catch (error) {
        console.error("Hiba a foglalások lekérésekor:", error);
      }
    },
    async addBooking(booking) {
      try {
        await axios.post("http://localhost:3000/bookings", booking);
        this.bookings.push(booking);
      } catch (error) {
        console.error("Hiba a foglalás hozzáadásakor:", error);
      }
    },
  },
});

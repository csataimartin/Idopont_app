<template>
  <div class="container mt-4">
    <h1>Időpontfoglalás</h1>
    
    <div class="mb-3">
      <label for="service" class="form-label">Válassz szolgáltatást:</label>
      <select v-model="selectedService" class="form-select">
        <option v-for="service in services" :key="service" :value="service">
          {{ service }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Válassz napot:</label>
      <select v-model="selectedDay" class="form-select">
        <option v-for="day in availableDays" :key="day">{{ day }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Válassz időpontot:</label>
      <select v-model="selectedTime" class="form-select">
        <option v-for="time in availableTimes" :key="time">{{ time }}</option>
      </select>
    </div>

    <button class="btn btn-primary" @click="bookAppointment">Foglalás</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const services = ref([
      "Pszichológus",
      "Műkörmös",
      "Fodrász (férfi/női)",
      "Orvos",
      "Műszaki vizsga",
      "Tetováló",
      "Hivatali ügyintézés",
    ]);
    const availableDays = ref(["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"]);
    const availableTimes = ref(["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"]);

    const selectedService = ref("");
    const selectedDay = ref("");
    const selectedTime = ref("");

    const bookAppointment = () => {
      alert(`Foglalás: ${selectedService.value}, ${selectedDay.value}, ${selectedTime.value}`);
    };

    return { services, availableDays, availableTimes, selectedService, selectedDay, selectedTime, bookAppointment };
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>

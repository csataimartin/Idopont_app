<template>
  <div class="container mt-5">
    <h2>Foglalás megerősítése</h2>
    <form @submit.prevent="confirmBooking">
      <div class="mb-3">
        <label class="form-label">Név</label>
        <input v-model="name" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Telefonszám</label>
        <input v-model="phone" type="text" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-success">Foglalás véglegesítése</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const phone = ref("");

    const confirmBooking = () => {
      console.log("Foglalás mentése", { name: name.value, phone: phone.value });
    };

    return { name, phone, confirmBooking };
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>
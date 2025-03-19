import { describe, it, expect } from "vitest";
import { useBookingStore } from "@/stores/bookingStore";

describe("Foglalási rendszer tesztek", () => {
  it("Helyes adatokat tartalmazó foglalás sikeres legyen", async () => {
    const bookingStore = useBookingStore();

    const newBooking = {
      name: "Teszt Elek",
      phone: "06201234567",
      service: "Fodrász",
      date: "2025-03-20",
      time: "10:00",
    };

    const result = await bookingStore.bookAppointment(newBooking);

    expect(result.success).toBe(true);
    expect(result.message).toBe("Foglalás sikeres!");
  });

  it("Hiányzó név esetén a foglalás sikertelen legyen", async () => {
    const bookingStore = useBookingStore();

    const newBooking = {
      name: "", // Itt a név hiányzik
      phone: "06201234567",
      service: "Orvos",
      date: "2025-03-20",
      time: "14:00",
    };

    const result = await bookingStore.bookAppointment(newBooking);

    expect(result.success).toBe(false);
    expect(result.message).toBe("Név megadása kötelező!");
  });

  it("Már foglalt időpont esetén a foglalás sikertelen legyen", async () => {
    const bookingStore = useBookingStore();

    // lefoglaljuk az időpontot
    await bookingStore.bookAppointment({
      name: "Teszt Elek",
      phone: "06201234567",
      service: "Tetováló",
      date: "2025-03-20",
      time: "12:00",
    });

    // ugyanarra az időpontra újabb foglalást próbálunk
    const result = await bookingStore.bookAppointment({
      name: "Teszt Béla",
      phone: "06201112222",
      service: "Tetováló",
      date: "2025-03-20",
      time: "12:00",
    });

    expect(result.success).toBe(false);
    expect(result.message).toBe("Ez az időpont már foglalt!");
  });
});
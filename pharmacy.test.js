import { Drug, HerbalTea, MagicPill, Fervex, Dafalgan } from "./drug";

describe("Pharmacy System", () => {
  // Basic Drug Tests
  describe("Standard Drug", () => {
    it("should decrease expiresIn and benefit for normal drug", () => {
      const drug = new Drug("Normal", 10, 20);
      drug.update();
      expect(drug.expiresIn).toBe(9);
      expect(drug.benefit).toBe(19);
    });

    it("should degrade benefit twice as fast after expiration", () => {
      const drug = new Drug("Normal", 0, 20);
      drug.update();
      expect(drug.expiresIn).toBe(-1);
      expect(drug.benefit).toBe(18);
    });

    it("should not have negative benefit", () => {
      const drug = new Drug("Normal", 0, 1);
      drug.update();
      expect(drug.benefit).toBe(0);
    });
  });

  // Herbal Tea Tests
  describe("Herbal Tea", () => {
    it("should increase in benefit before expiration", () => {
      const tea = new HerbalTea("Herbal Tea", 10, 20);
      tea.update();
      expect(tea.expiresIn).toBe(9);
      expect(tea.benefit).toBe(21);
    });

    it("should increase benefit twice as fast after expiration", () => {
      const tea = new HerbalTea("Herbal Tea", 0, 20);
      tea.update();
      expect(tea.expiresIn).toBe(-1);
      expect(tea.benefit).toBe(22);
    });

    it("should not exceed maximum benefit of 50", () => {
      const tea = new HerbalTea("Herbal Tea", 10, 49);
      tea.update();
      expect(tea.benefit).toBe(50);
    });
  });

  // Magic Pill Tests
  describe("Magic Pill", () => {
    it("should never change", () => {
      const pill = new MagicPill("Magic Pill", 10, 30);
      pill.update();
      expect(pill.expiresIn).toBe(10);
      expect(pill.benefit).toBe(30);
    });
  });

  // Fervex Tests
  describe("Fervex", () => {
    it("should increase benefit normally", () => {
      const fervex = new Fervex("Fervex", 15, 20);
      fervex.update();
      expect(fervex.expiresIn).toBe(14);
      expect(fervex.benefit).toBe(21);
    });

    it("should increase benefit faster when 10 days or less", () => {
      const fervex = new Fervex("Fervex", 9, 20);
      fervex.update();
      expect(fervex.expiresIn).toBe(8);
      expect(fervex.benefit).toBe(22);
    });

    it("should increase benefit even faster when 5 days or less", () => {
      const fervex = new Fervex("Fervex", 4, 20);
      fervex.update();
      expect(fervex.expiresIn).toBe(3);
      expect(fervex.benefit).toBe(23);
    });

    it("should drop to 0 benefit after expiration", () => {
      const fervex = new Fervex("Fervex", 0, 20);
      fervex.update();
      expect(fervex.expiresIn).toBe(-1);
      expect(fervex.benefit).toBe(0);
    });
  });

  // Dafalgan Tests
  describe("Dafalgan", () => {
    it("should degrade benefit twice as fast before expiration", () => {
      const dafalgan = new Dafalgan("Dafalgan", 10, 20);
      dafalgan.update();
      expect(dafalgan.expiresIn).toBe(9);
      expect(dafalgan.benefit).toBe(18);
    });

    it("should degrade benefit four times as fast after expiration", () => {
      const dafalgan = new Dafalgan("Dafalgan", 0, 20);
      dafalgan.update();
      expect(dafalgan.expiresIn).toBe(-1);
      expect(dafalgan.benefit).toBe(16);
    });

    it("should not have negative benefit", () => {
      const dafalgan = new Dafalgan("Dafalgan", 0, 1);
      dafalgan.update();
      expect(dafalgan.benefit).toBe(0);
    });
  });

  // Benefit Constraint Tests
  describe("Benefit Constraints", () => {
    it("should not allow benefit below 0 during initialization", () => {
      const drug = new Drug("Test", 10, -5);
      expect(drug.benefit).toBe(0);
    });

    it("should not allow benefit above 50 during initialization", () => {
      const drug = new Drug("Test", 10, 60);
      expect(drug.benefit).toBe(50);
    });
  });
});

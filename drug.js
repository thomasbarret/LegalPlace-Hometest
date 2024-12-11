export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = Math.min(Math.max(benefit, 0), 50);
  }

  update() {
    this.expiresIn--;

    if (this.benefit > 0) {
      this.benefit--;
    }

    if (this.expiresIn < 0 && this.benefit > 0) {
      this.benefit -= 2;
    }
  }
}

class HerbalTea extends Drug {
    update() {
        this.expiresIn--;

        if (this.benefit < 50) {
        this.benefit++;
        }

        if (this.expiresIn < 0 && this.benefit < 50) {
        this.benefit++;
        }
    }
}
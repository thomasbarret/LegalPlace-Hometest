export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = Math.min(Math.max(benefit, 0), 50);
  }

  update() {
    this.expiresIn--;

    if (this.benefit > 0 && this.expiresIn >= 0) {
      this.benefit--;
    }

    if (this.expiresIn < 0 && this.benefit > 0) {
      this.benefit -= 2;
    }

    this.benefit = Math.max(0, this.benefit);
  }
}

export class HerbalTea extends Drug {
  update() {
    this.expiresIn--;

    if (this.benefit < 50 && this.expiresIn >= 0) {
      this.benefit++;
    }

    if (this.expiresIn < 0 && this.benefit < 50) {
      this.benefit += 2;
    }

    this.benefit = Math.min(50, this.benefit);
  }
}

export class MagicPill extends Drug {
  update() {}
}

export class Fervex extends Drug {
  update() {
    this.expiresIn--;

    if (this.benefit < 50) {
      this.benefit++;

      if (this.expiresIn < 10) {
        this.benefit++;
      }

      if (this.expiresIn < 5) {
        this.benefit++;
      }
    }

    if (this.expiresIn < 0) {
      this.benefit = 0;
    }

    this.benefit = Math.min(50, this.benefit);
  }
}

export class Dafalgan extends Drug {
  update() {
    this.expiresIn--;

    if (this.benefit > 0 && this.expiresIn >= 0) {
      this.benefit -= 2;
    }

    if (this.expiresIn < 0 && this.benefit > 0) {
      this.benefit -= 4;
    }

    this.benefit = Math.max(0, this.benefit);
  }
}

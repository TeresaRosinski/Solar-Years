export class userAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
  convertEarthAgeToMercury() {
    return this.earthAge / 0.24;
  }
  convertEarthAgeToVenus() {
    return this.earthAge / 0.62;
  }
  convertEarthAgeToMars() {
    return this.earthAge / 1.88;
  }
  convertEarthAgeToJupiter() {
    return this.earthAge / 11.86;
  }
  lifeLeftAllPlanets() {
    let lifeLeftString = `You are currently ${this.earthAge} years old. The life expectancy on earth is 72 years.`;
    if (this.earthAge < 72) {
      lifeLeftString += `On earth you are expected to live ${
        72 - this.earthAge
      } years more.`;
      lifeLeftString += `On Mercury you are expected to live ${
        416.67 - this.earthAge / 0.24
      } years more.`;
      lifeLeftString += `On Venus you are expected to live ${
        161.12 - this.earthAge / 0.62
      } years more.`;
      lifeLeftString += `On Mars you are expected to live ${
        53.19 - this.earthAge / 1.88
      } years more.`;
      lifeLeftString += `On Jupiter you are expected to live ${
        8.431 - this.earthAge / 11.86
      } years more.`;
    } else {
      lifeLeftString += `On earth you have outlived the global life expectancy by ${
        this.earthAge - 72
      } years.`;
      lifeLeftString += `On Mercury you have outlived the global life expectancy by ${
        this.earthAge / 0.24 - 72
      } years.`;
      lifeLeftString += `On Venus you have outlived the global life expectancy by ${
        this.earthAge / 0.62 - 72
      } years.`;
      lifeLeftString += `On Mars you have outlived the global life expectancy by ${
        this.earthAge / 1.88 - 72
      } years.`;
      lifeLeftString += `On Jupiter you have outlived the global life expectancy by ${
        this.earthAge / 1.88 - 72
      } years.`;
    }
    return lifeLeftString;
  }
}

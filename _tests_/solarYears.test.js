import { userAge } from "../src/SolarYears.js";

describe("userAge", () => {
  test("should correctly create a userAge class", () => {
    const user1 = new userAge(45);
    expect(user1.earthAge).toEqual(45);
  });

  test("should correctly change EarthAge to MercuryAge", () => {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToMercury()).toEqual("187.50");
  });

  test("should correctly change EarthAge to VenusAge", () => {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToVenus()).toEqual("72.58");
  });

  test("should correctly change EarthAge to MarsAge", () => {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToMars()).toEqual("23.94");
  });

  test("should correctly change EarthAge to JupiterAge", () => {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToJupiter()).toEqual("3.79");
  });

  test("should create a string that tells the user how many years they have left on all planets if they are younger than the global life expectancy", () => {
    const user1 = new userAge(45);
    expect(user1.lifeLeftAllPlanets()).toEqual(
      "You are currently 45 years old. The life expectancy on earth is 72 years.On earth you are expected to live 27 years more.On Mercury you are expected to live 229.17 years more.On Venus you are expected to live 88.54 years more.On Mars you are expected to live 29.25 years more.On Jupiter you are expected to live 4.64 years more.")
  });
    
  test("should tell user how many years they have lived past the left expectancy on all planets", () => {
    const user2 = new userAge(100);
    expect(user2.lifeLeftAllPlanets()).toEqual(
      "You are currently 100 years old. The life expectancy on earth is 72 years.On earth you have outlived the global life expectancy by 28 years.On Mercury you have outlived the global life expectancy by -0.00 years.On Venus you have outlived the global life expectancy by 0.17 years.On Mars you have outlived the global life expectancy by 0.00 years.On Jupiter you have outlived the global life expectancy by 0.00 years.")
  });
});



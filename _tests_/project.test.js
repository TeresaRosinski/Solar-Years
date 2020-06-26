import {checkAge}from './../src/inputChecker.js';
import {userAge}from './../src/SolarYears.js';
import { TestScheduler } from 'jest';


describe('userAge', ()=>{

  test('should correctly create a userAge class', ()=>{
    const user1 = new userAge(45);
    expect(user1.earthAge).toEqual(45);
  });

  test('should correctly change EarthAge to MercuryAge', ()=> {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToMercury()).toEqual(187.5);
  });

  test('should correctly change EarthAge to VenusAge', ()=> {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToVenus()).toEqual(72.58064516129032);
  });

  test('should correctly change EarthAge to MarsAge', ()=> {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToMars()).toEqual(23.93617021276596);
  });

  test('should correctly change EarthAge to JupiterAge', ()=> {
    const user1 = new userAge(45);
    expect(user1.convertEarthAgeToJupiter()).toEqual(3.794266441821248);
  });

  test('should create a string that tells the user how many years they have left on all planets', ()=> {
    //for a user younger than the global life expectancy
    const user1 = new userAge(45);
    expect(user1.lifeLeftAllPlanets()).toEqual("You are currently 45 years old. The life expectancy on earth is 72 years.On earth you are expected to live 27 years more.On Mercury you are expected to live 229.17000000000002 years more.On Venus you are expected to live 88.53935483870968 years more.On Mars you are expected to live 29.25382978723404 years more.On Jupiter you are expected to live 4.636733558178751 years more.");
  });

});


describe('ageChecker', ()=>{
  test('Should check that a user enters number between 0 and 150', ()=> {
    expect(checkAge(155)).toEqual(true);
    expect(checkAge(-5)).toEqual(true);
  });
});
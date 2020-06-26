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
    const user1 = new userAge(45);
    expect(user1.lifeLeftAllPlanets()).toEqual(" ");
  });

});


describe('ageChecker', ()=>{
  test('Should check that a user enters number between 0 and 150', ()=> {
    expect(checkAge(155)).toEqual(true);
    expect(checkAge(-5)).toEqual(true);
  });
});
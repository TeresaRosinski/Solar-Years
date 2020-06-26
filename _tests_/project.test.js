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

});


describe('ageChecker', ()=>{

  test('Should check that a user enters number between 0 and 150', ()=> {
    expect(checkAge(155)).toEqual(true);
    expect(checkAge(-5)).toEqual(true);
  });
});
import {checkAge}from './../src/inputChecker.js';
import {userAge}from './../src/SolarYears.js';
import { TestScheduler } from 'jest';


describe('userAge', ()=>{
  

  test('should correctly create a userAge class', ()=>{
    const user1 = new userAge(45);
    expect(user1.earthAge).toEqual(45);
  })

});


describe('ageChecker', ()=>{

test('Should check that a user enters number between 0 and 150', ()=>{
  const tooOld = new userAge(151);
  expect(tooOld.earthAge).toEqual(wrongAge);
  const tooYoung = new userAge(0);
  expect(tooYoung.earthAge).toEqual(wrongAge);

});
});
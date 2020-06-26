import {userAge}from './../src/SolarYears.js';
import { TestScheduler } from 'jest';

describe('userAge', ()=>{

  test('should correctly create a userAge class', ()=>{
    const user1 = new userAge(45);
    expect(user1.earthAge).toEqual(45);
  })
  
  test('Should check that a user enters number between 0 and 150', ()=>{
    const tooOld = new userAge(151);
    expect(tooOld.earthAge).toEqual('Please enter a number greater than 0 and less than 150');
    const tooYoung = new userAge(0);
    expect(tooYoung.earthAge).toEqual('Please enter a number greater than 0 and less than 150');
  
  });

});
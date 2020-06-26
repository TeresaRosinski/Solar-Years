import {userAge}from './../src/SolarYears.js';
import { TestScheduler } from 'jest';

describe('userAge', ()=>{
  test('should correctly create a userAge class', ()=>{
    const user1 = new userAge(45);
    expect(user1.earthAge).toEqual(45);
  })
  

});
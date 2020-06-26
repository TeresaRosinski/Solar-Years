export class userAge {
  constructor (earthAge){ 
    this.earthAge=earthAge;
  }
  convertEarthAgeToMercury(){ 
    return (this.earthAge/(.24));
  }
  convertEarthAgeToVenus(){
    return (this.earthAge/.62);
  }
  convertEarthAgeToMars(){
    return (this.earthAge/1.88);
  }

};
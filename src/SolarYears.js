export class userAge {
  constructor (earthAge){ 
    this.earthAge=earthAge;
    console.log(this.earthAge);
  }
  convertEarthAgeToMercury(){ 
    console.log(this.earthAge);
    return (this.earthAge/.24);
  }
  convertEarthAgeToVenus(){
    return (this.earthAge/.62);
  }

};
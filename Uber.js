class Uber {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) * 8;
    }
  }
  
  let uber = new Uber(10);
  console.log(uber.getPrice());
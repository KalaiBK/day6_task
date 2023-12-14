class Circle{
    constructor(color,radius){
        this.radius=radius;
    }
    setRadius(radius){
        this.radius=radius;
    }
   showResult(){
       let str =  "The circle has a radius of: "+ this.radius;
       return str;
   }
}
let circle=new Circle();
circle.setRadius(9)
console.log(circle.showResult())
class Person{
    constructor(name, fatherName, age, city, state){
        this.name=name;
        this.fatherName=fatherName;
        this.age=age;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log("Name: "+this.name+", Father's Name: "+this.fatherName+", Age: "+this.age+", City: "+this.city+", State: "+this.state)
    }
}
let personDetails=new Person("Kalaiselvan", "Boopathy", "26", "Chennai", "Tamil Nadu")
personDetails.details()
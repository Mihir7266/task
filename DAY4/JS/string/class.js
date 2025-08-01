class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
const myCar1 = new Car("ford",2014);
const myCar2 = new Car("audi",2020);
console.log(myCar1.name + " " + myCar2.name)

//car age
class Car1{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

age(){
    const date = new Date();
    return date.getFullYear() - this.year;

    }
}
const myCar = new Car1("ford",2014);

console.log("My Car Is " + myCar.age() + " Year Old")
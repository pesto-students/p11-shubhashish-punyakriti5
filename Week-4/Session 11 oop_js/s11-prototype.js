// Section 1

person = {};
Object.defineProperties(person, {
  name: {value: "Punya", writable: false },
  email: { value: "abc@org.com", writable: false },
  age: { value: 24, writable: true },
  getAge: {
    value: function () {
      return person.age
    }, writable: false
  },
  setAge: {
    value: function (age) {
      this.age = age;
    }, writable:true
  },
});
console.log(person);

// Section 2

class Vehicle{
    constructor(make,model,year){
      this.make=make;
      this.model=model;
      this.year=year;
    }

    getDetails(){
      console.log(`${this.model} of ${this.make} launched in ${this.year}`)
    }
}

class Car extends Vehicle{
  constructor(make,model,year,numDoors){
    super(make,model,year);
    this.numDoors=numDoors;}
    getDetails(){
      super.getDetails();
      console.log(`Number of door in this car is ${this.numDoors}`);
    }
}

const car1= new Car("Mahindra","Thar-SUV",2010,4);
car1.getDetails();
 



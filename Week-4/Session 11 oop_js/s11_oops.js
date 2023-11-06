//section 1
console.log("Inheritance");

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive(make, model) {
    console.log(`Driving ${make} ${model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}
class RideShareCar extends Car {
  constructor(make, model, year, color, isAvailable) {
    super(make, model, year, color);
    this.isAvailable = isAvailable;
  }
}


const car1 = new Car();
car1.drive("make", 123);

//Section 2

console.log("Polymorphism");

class Shape {
  calculateArea() {
    console.log("super class function");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea(width, height) {
    return height * width;
  }
}
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.height = height;
    this.base = base;
  }

  calculateArea(base, height) {
    return (base * height) / 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

const r1 = new Rectangle();
const t1 = new Triangle();
const c1 = new Circle();

console.log(r1.calculateArea(10, 10));
console.log(t1.calculateArea(6, 10));
console.log(c1.calculateArea(8));

//Section 3
console.log("Encapsulation and Abstraction");

class BankAccount {
  #accountNum;
  #balance;
  #accHolderName;

  constructor(accountNum, balance, accHolderName) {
    this.#accountNum = accountNum;
    this.#balance = balance;
    this.#accHolderName = accHolderName;
  }
  getBalance() {
    return this.#balance;
  }
  setBalance(value) {
    this.#balance = value;
  }
}
class CheckingAccount extends BankAccount {
  constructor(accountNum, balance, accHolderName, amount) {
    super(accountNum, balance, accHolderName);
    this.amount = amount;
  }

  deposit(amount) {
    let bal = this.getBalance();
    this.setBalance(bal + amount);
    return this.getBalance();
  }
  withdraw(amount) {
    let bal = this.getBalance();
    this.setBalance(bal - amount);
    return this.getBalance();
  }
}
class SavingsAccount extends BankAccount {
  constructor(accountNum, balance, accHolderName, amount) {
    super(accountNum, balance, accHolderName);
    this.amount = amount;
  }
  withdraw(amount) {
    let bal = this.getBalance();
    if(amount>bal) {console.log(" WITHDRAWAL FAILED");
}
    else{
    this.setBalance(bal - amount);
    return this.getBalance();
  }
  }
}
const person1 = new CheckingAccount("345678921", 1000000, "Punya", 0);
console.log(person1.deposit(10000));
console.log(person1.withdraw(50000));

const person2 = new SavingsAccount("3546670987",20000,"Sarvesh",0);
console.log(person2.withdraw(3000));


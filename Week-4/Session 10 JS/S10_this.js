class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce(name, age, gender, nationality) {
    console.log(
      `I am ${name}, I am ${age} years old, ${gender}, from ${nationality}`
    );
  }
}

const p1 = new Person();
p1.introduce("Punya", 24, "Female", "India");

const p2 = new Person();
p2.introduce("Tripti", 23, "Female", "India");

const p3 = new Person();
p3.introduce("Suchi", 24, "Female", "India");

class Student extends Person {
  constructor( name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }
  study(subject) {
    console.log(`I am studying ${subject}`);
  }
}

const s1 = new Student();
s1.introduce("Ravi", 21, "Male", "India");
s1.study("Electronics Engineering");

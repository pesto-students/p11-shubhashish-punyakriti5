class Person {
  constructor(Name, Age, Gender, Nationality) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.Nationality = Nationality;
  }

  introduce(Name, Age, Gender, Nationality) {
    console.log(
      `I am ${Name}, I am ${Age} years old, ${Gender}, from ${Nationality}`
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
  constructor(Name, Age, Gender, Nationality, subject) {
    super(Name, Age, Gender, Nationality);
    this.subject = subject;
  }
  study(subject) {
    console.log(`I am studying ${subject}`);
  }
}

const s1 = new Student();
s1.introduce("Ravi", 21, "Male", "India");
s1.study("Electronics Engineering");

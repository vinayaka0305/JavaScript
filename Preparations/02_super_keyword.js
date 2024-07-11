class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  welcome() {
    console.log("hello", this.name);
    console.log("you are", this.age, "years old");
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.gpa = gpa;
  }

  hello() {
    // console.log("hello", this.name )
    // console.log("you are", this.age,"years old")
    super.welcome()
    console.log("your gpa is ", this.gpa);
  }
}

class Teacher extends Person {
  constructor(name, age, classSize) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.classSize = classSize;
  }
  hello() {
    // console.log("hello", this.name )
    // console.log("you are", this.age,"years old")
    super.welcome();
    console.log("your clasSize is ", this.classSize);
  }
}

const st1 = new Student("vinayaka", 28, 6.8);
const tea1 = new Teacher("bks", 45, 40);
// console.log(st1);
// console.log(tea1);
st1.hello();
tea1.hello();

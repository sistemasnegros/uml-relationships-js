// Class1 have a reations the composition with Class2.
// Class1 create new object the Class2 and is your owner.
class Class1 {
  constructor() {
    this.class2 = new Class2();
  }
}

class Class2 {
  method() {
    console.log('Used method for the Class2');
  }
}

const class1 = new Class1();
console.log(class1);

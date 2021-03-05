// Class1 have a reations the association with Class2.
// Diference Conceptual with aggregation
class Class1 {
  constructor(class2) {
    this.class2 = class2;
  }
}

class Class2 {
  method() {
    console.log('Used method for the Class2');
  }
}

const class1 = new Class1(new Class2());
console.log(class1);

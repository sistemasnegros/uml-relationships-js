// Class1 have a reations the aggregation with Class2.
// Diference Conceptual with association.
// Class1 must have a reason for being for Class2 and vice verse.
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

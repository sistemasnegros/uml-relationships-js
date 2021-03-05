// Class1 have a reations the use with Class2.

class Class1 {
  relationUse(class2) {
    class2.use();
  }
}

class Class2 {
  use() {
    console.log('Used method for the Class2');
  }
}

const class1 = new Class1();
const class2 = new Class2();

class1.relationUse(class2);

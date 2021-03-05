// Class1 have a reations the inheritance with Class2.
class Class2 {
  method() {
    console.log('Used method for the Class2');
  }
}

class Class1 extends Class2 {}

const class1 = new Class1();
class1.method();

function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof of ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

const exampleObj = new ExampleConstructor();
console.log('value of exampleObj: ', exampleObj);

const isInstance = exampleObj instanceof ExampleConstructor;
console.log('exampleObj is an instance of ExampleConstructor:', isInstance);

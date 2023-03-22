function ExampleConstructor() {}
console.log('value of ExampleConstructor: ', ExampleConstructor);
console.log('typeof of ExampleConstructor: ', typeof ExampleConstructor);

const exampleObj = new ExampleConstructor();
console.log('value of exampleObj: ', exampleObj);

const isInstance = exampleObj instanceof ExampleConstructor;
console.log('exampleObj is an instance of ExampleConstructor:', isInstance);

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3,
});

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3, // if configurable = false => TypeError: Cannot redefine property: c
});

myObject.c = 100;

console.log(delete myObject.c); // if configurable = false => it's false

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(myObject);

/*
  Object
  -  Create Object With Create Method
*/
let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());
// ----------------------------------------------------
let obj = Object.create({});
obj.a = 100;
console.log(obj);
// ----------------------------------------------------
// create a new Object
let copyObj = Object.create(user);

copyObj.age = 50;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
// ----------------------------------------------------

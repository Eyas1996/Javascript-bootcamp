/*
  Class
  Inheritance
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
  wirteMsg() {
    return `Message From Parent Class`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMsg() {
    return `You Are Admin`;
  }
  wirteMsg() {
    return `Message From Chid Class`;
  }
}

let admin1 = new Admin("Osama", "o@nn.sa");
console.log(admin1);
console.log(admin1.name);
console.log(admin1.email);
console.log(admin1.sayHello());
console.log(admin1.showEmail());
console.log(admin1.adminMsg());
console.log(admin1.wirteMsg());

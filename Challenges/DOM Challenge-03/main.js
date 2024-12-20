// <!-- Create and style a Home Page only with JavaScript -->
// <!-- Needed Output in the challenge -->
// <!-- https://elzero.org/wp-content/uploads/2021/09/dom-challenge.jpg -->

// Create and style a Home Page only with JavaScript

// Body Styling
document.body.style.fontFamily = "Tahoma, Arial";
document.body.style.margin = "0px";
document.body.style.backgroundColor = "#f1f1f1";

// Start Container
let container = document.createElement("div");
container.className = "container";
container.style.padding = "0 20px";
document.body.appendChild(container);
// End Container
// Start Header
let header = document.createElement("header");
header.style.padding = "10px 0";
header.style.display = "flex";
header.style.justifyContent = "space-between";
container.appendChild(header);
// start Logo
let logo = document.createElement("h1");
logo.textContent = "Elzero";
logo.style.color = "#23a96e";
logo.style.margin = "7px 0px 0px 0px";
logo.style.fontSize = "1.5em";
header.appendChild(logo);
// End Logo
// Start Navbar
let nav = document.createElement("nav");
let ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.gap = "15px";
let home = document.createElement("li");
home.textContent = "Home";
home.className = "link";
home.style.color = "#666";
let about = document.createElement("li");
about.textContent = "About";
about.className = "link";
about.style.color = "#666";
let service = document.createElement("li");
service.textContent = "Service";
service.className = "link";
service.style.color = "#666";
let contact = document.createElement("li");
contact.textContent = "Contact";
contact.className = "link";
contact.style.color = "#666";
ul.appendChild(home);
ul.appendChild(about);
ul.appendChild(service);
ul.appendChild(contact);
nav.appendChild(ul);
header.appendChild(nav);
// End Navbar
// End Header

// Start main
let main = document.createElement("main");
main.style.display = "grid";
main.style.gridTemplateColumns = " 1fr 1fr 1fr";
main.style.gap = " 20px";
main.style.height = " 716px";
main.style.padding = " 20px";
main.style.backgroundColor = "#ddd";
document.body.appendChild(main);

let counter = 1;
for (let i = 0; i < 15; i++) {
  let box = document.createElement("div");
  box.style.backgroundColor = "#f1f1f1";
  box.style.textAlign = "center";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.justifyContent = "center";
  box.style.borderRadius = "4px";
  let num = document.createElement("h1");
  num.textContent = counter++;
  num.style.marginBottom = "7px";
  num.style.fontSize = "2.3rem";
  num.style.fontWeight = "normal";
  let title = document.createElement("span");
  title.textContent = "Product";
  title.style.display = "block";
  title.style.marginBottom = "20px";
  title.style.fontSize = "0.7rem";
  title.style.color = "#777";
  box.appendChild(num);
  box.appendChild(title);
  main.appendChild(box);
}
// End main
// Start Footer
let footer = document.createElement("footer");
footer.style.backgroundColor = "#23a96e";
footer.style.textAlign = "center";
document.body.appendChild(footer);

let myP = document.createElement("p");
myP.textContent = "Copyright 2021";
myP.style.color = "#fff";
myP.style.padding = "20px";
myP.style.margin = "0px";
footer.appendChild(myP);
// End Footer

// Script
let script = document.querySelector("script");
document.body.append(script);

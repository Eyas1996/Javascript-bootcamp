/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let counter = 0;
for (let i = 0; i < 100; i++) {
  // create a counter
  counter++;
  // create Div Element
  let myDiv = document.createElement("div");
  // give Div Element a class
  myDiv.className = "product";
  // create a h3 Element
  let myH3 = document.createElement("h2");
  // give h3 Element a text and add it to the h3 Element.
  let hText = document.createTextNode(`${counter}. Product Title`);
  myH3.appendChild(hText);
  // create a p Element
  let myP = document.createElement("p");
  // give P Element a text and add it to the P Element.
  let pText = document.createTextNode(`${counter}. Product Description`);
  myP.appendChild(pText);
  // add h3 Element to div Element
  myDiv.appendChild(myH3);
  // add p Element to div Element
  myDiv.appendChild(myP);
  // add Div Element to the countainer
  document.body.appendChild(myDiv);
  // show the Element in Console
  // console.log(myDiv);
}

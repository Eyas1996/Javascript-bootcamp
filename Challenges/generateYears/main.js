// function generateYears(start, end) {
//   let selectElement = document.createElement("select");
//   for (let i = start; i <= end; i++) {
//     selectElement.innerHTML =
//       `<option value=${[i]}>${[i]}</option>`
//     console.log(i);
//   }
//   document.body.appendChild(selectElement)
// }
// generateYears(2010, 2022);

function generateYears(start, end) {
  document.write(`<select>`);
  for (let i = start; i <= end; i++) {
    document.write(`<option value=${[i]}>${[i]}</option>`);
  }
  document.write(`</select>`);
}
generateYears(2000, 2022);

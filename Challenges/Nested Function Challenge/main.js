function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `Hello ${zName.substring(0, 5)} ${zName.charAt(6).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)},`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.charAt(0).toUpperCase()}${zCountry
      .charAt(1)
      .toUpperCase()}.`;
  }
  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
console.log(getDetails("Bahaa qassem", "28 Is The Age", "Deutschland"));
// Hello Bahaa Q., Your Age Is 28, You Live In DE

  /*
      Filter
      - Filter Longest Word By Number
    */
    // -----------------------------------------------------------
    // Filter Words More Than 4 Characters
    let sentence = "I love Foood Code Too Playing Much";
    let smallWords = sentence.split(" ").filter(function (a) {
      return a.length <= 4;
    }).join(" ");
    console.log(smallWords)
    // -----------------------------------------------------------
    // Ignore Numbers With Map
    let mapIgnoreNumbers = "Elz123er4o";
    let ignMap = mapIgnoreNumbers.split("").map(function (a) {
      return isNaN(parseInt(a)) ? a : "";
    }).join("");
    console.log(ignMap);
    // -----------------------------------------------------------
    // Ignore Numbers With Filter
    let filterIgnoreNumbers = "Elz123er4o";
    let ignFilter = filterIgnoreNumbers.split("").filter(function (a) {
      return isNaN(parseInt(a));
    }).join("");
    console.log(ignFilter);
    // -----------------------------------------------------------
    // Filter Strings + Multiply
    let mix = "A13BS2ZX";
    let mixedContent = mix.split("").filter(function (a) {
      return !isNaN(parseInt(a));
    }).map(function (a) {
      return a * a;
    }).join("");
    console.log(mixedContent);
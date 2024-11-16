/* https://medium.com/@onlinemsr/how-to-use-javascript-dictionary-like-a-pro-82b00599a16d*/
const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

function getLatinCharacterList(string) {
  let array = string.split("");
  return array;
}
// console.log("Step1.1 :", getLatinCharacterList("Hello World"));

function getMorseCharacterList(string) {
  let array = string.split(" ");
  return array;
}
console.log(
  "Step 2.1",
  getMorseCharacterList(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. ")
);

function translateLatinCharacter(char) {
  let morseChar = latinToMorse[char];
  return morseChar;
}
// console.log("Step1.2 :", translateLatinCharacter("A"));

function translateMorseCharacter(symbol) {
  let latinChar = morseToLatin[symbol];
  return latinChar;
}
console.log("Step2.2 :", translateMorseCharacter(".-"));

function encode(text) {
  let bigString = text.toUpperCase(); // met les caractères en maj pour trad
  let latinArray = getLatinCharacterList(bigString); // convertit str en arr
  let translation = ""; // var vide pour stocker résultat
  latinArray.forEach((char) => {
    // itère sur chd élement du tableau
    if (char === " ") {
      // si char est un espace
      translation += "/ ";
    } else {
      translation += translateLatinCharacter(char) + " ";
    }
  });
  return translation;
}
console.log("Step1.3 :", encode(latinWord.value));

function decode(morseText) {
  let morseArray = getMorseCharacterList(morseText);
  console.log("morseArray", morseArray);
  let morseTranslation = "";
  morseArray.forEach((symbol) => {
    if (symbol === "/") {
      morseTranslation += " ";
    } else {
      morseTranslation += translateMorseCharacter(symbol);
    }
  });
  return morseTranslation.toLowerCase();
}

console.log("Step2.3", decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));

function displayMorse() {
  const latinInput = document.getElementById("latinWord").value;
  document.getElementById("morseOutput").innerHTML = encode(latinInput);
}
document
  .getElementById("translateToMorse")
  .addEventListener("click", displayMorse);

  function displayLatin() {
    const morseInput = document.getElementById("morseWord").value;
    document.getElementById("latinOutput").innerHTML = decode(morseInput);
  }
  document
    .getElementById("translateToLatin")
    .addEventListener("click", displayLatin);

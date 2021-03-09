// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    if (!encode) shift = -shift;
    if (shift < 0) shift += 26;
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let result = ""
    const lowerCase = input.toLowerCase();
    
    for (let i = 0; i < lowerCase.length; i++) {
      let char = lowerCase[i];
      if (alpha.includes(char)) {
        let currentPosition = alpha.indexOf(char);
        currentPosition = (currentPosition + shift)%26;
        result += alpha[currentPosition];
      }
      else {
        result += char;
      }
      
    }
    
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

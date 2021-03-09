// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let result = '';
    if (!alphabet) return false;
    if (alphabet.length < 26 || alphabet.length > 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      const array = alphabet.split('');
      const check = array.filter((letter) => letter === char);
      if (check.length > 1) return false;
    }
    
    const inputEdit = input.toLowerCase();
    const alpha = "abcdefghijklmnopqrstuvwxyz";

    if (encode) result = encoder(alphabet, alpha, inputEdit);
    if (!encode) result = decoder(alphabet, alpha, inputEdit);
    return result;
  }

  return {
    substitution, encoder, decoder
  };

  function encoder(alphabet, alpha, inputEdit) {
    let result = '';
    for (let i = 0; i < inputEdit.length; i++) {
      const char = inputEdit[i];
      const match = alpha.indexOf(char);
      if (alpha.includes(char)) {
        result += alphabet[match];
      }
      else {
        result += char;
      }
    }
    return result;
  }
  function decoder(alphabet, alpha, inputEdit) {
    let result = '';
    for (let i = 0; i < inputEdit.length; i++) {
      const char = inputEdit[i];
      const match = alphabet.indexOf(char);
      if (alphabet.includes(char)) {
        result += alpha[match];
      }
      else {
        result += char;
      }
    }
    return result;
  }
})();

module.exports = substitutionModule.substitution;

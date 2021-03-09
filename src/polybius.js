// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function encoder(keys, inputL) {
    let result = "";
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < inputL.length; i++) {
      const char = inputL[i];
      if (alpha.includes(char)) {
        const match = keys.find((key) => key.letter === char);
        result += match.num;
      }
      else {
        result += char;
      }
    }
    return result;
  }

  function decoder(keys, inputL) {
    let wordArray = [];
    const numArray = inputL.split(' ');
    for (let i = 0; i < numArray.length; i++) {
      let word = '';
      let index = 0;
      const encodedWord = numArray[i];
      if (!(encodedWord.length % 2 == 0)) return false;
      for (let j = 0; j < encodedWord.length; j +=2) {     
        const encodedLetter = encodedWord.substr(index, 2);
        const letterOb = keys.find((key) => key.num === encodedLetter);
        if (letterOb.num === '42') {
          word += '(i/j)';
        }
        else {
          word += letterOb.letter;
        }
        index += 2;
      }
      wordArray.push(word);
    }
    return wordArray.join(' ');
  }

  function polybius(input, encode = true) {
    const keys = [
      {letter:"a", num:"11"},{letter:"b", num:"21"},{letter:"c", num:"31"},{letter:"d", num:"41"},{letter:"e", num:"51"},
      {letter:"f", num:"12"},{letter:"g", num:"22"},{letter: "h", num:'32'},{letter: "i", num:'42'},{letter:"j", num:'42'},
      {letter:"k", num:'52'},{letter:"l", num:'13'},{letter:"m", num:'23'},{letter:"n", num:'33'},{letter:"o", num:'43'},
      {letter:"p", num:'53'},{letter:"q", num:'14'},{letter:"r", num:'24'},{letter:"s", num:'34'},{letter:"t", num:'44'},
      {letter:"u", num:'54'},{letter:"v", num:'15'},{letter:"w", num:'25'},{letter:"x", num:'35'},{letter:"y", num:'45'},{letter:"z", num:'55'}
    ];
    let result = "";
    let inputL = input.toLowerCase();
    if (encode) result = encoder(keys, inputL);
    if (!encode) result = decoder(keys, inputL);
    return result;
  }

  return {
    polybius, encoder, decoder
  };
})();

module.exports = polybiusModule.polybius;

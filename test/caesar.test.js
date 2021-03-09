// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarModule", () => {
    it("should return false is shift is 0, < -25, > 25", () => {
        const noShift = caesar("thinkful"); //> false
        const highShift = caesar("thinkful", 99); //> false
        const lowShift = caesar("thinkful", -26); //> false

        expect(noShift).to.be.false;
        expect(highShift).to.be.false;
        expect(lowShift).to.be.false;
    });

    it("should ignore capital letters", () => {
        const decode = caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
        const code = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'

        expect(decode).to.equal('this is a secret message!');
        expect(code).to.equal('bpqa qa i amkzmb umaaiom!');
    });

    it("should wrap alphabet characters", () => {
        const actual = caesar("zebra", 3);
        expect(actual).to.equal("cheud");
    });

    it("should maintain spaces/non alphabet characters", () => {
        const decode = caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
        const code = caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'

        expect(decode).to.equal('this is a secret message!');
        expect(code).to.equal('bpqa qa i amkzmb umaaiom!');
    });
});
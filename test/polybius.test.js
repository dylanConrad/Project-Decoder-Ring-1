// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {

    it("should encode i and j to 42", () => {
        const actual = polybius("thinkful"); //> "4432423352125413"
        expect(actual).to.equal("4432423352125413");
    });

    it("should decode 42 to i/j", () => {
        const actual = polybius("4432423352125413", false); //> "th(i/j)nkful
        expect(actual).to.equal("th(i/j)nkful");
    });

    it("should ignore cap letters", () => {
        const actual = polybius("Hello world"); //> '3251131343 2543241341'
        expect(actual).to.equal('3251131343 2543241341');
    });

    it("should maintain spaces in message", () => {
        const actual = polybius("3251131343 2543241341", false); //> "hello world"
        expect(actual).to.equal("hello world");
    });

    it("should return false if a number doesn't have an even length", () => {
        const actual = polybius("443242335", false);
        expect(actual).to.be.false;
    });
});
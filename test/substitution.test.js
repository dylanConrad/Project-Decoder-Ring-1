// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if alphabet isn't 26 characters long", () => {
        const actual = substitution("thinkful", "short"); //> false
        expect(actual).to.be.false;
    });

    it("should correctly encode/decode phrase", () => {
        const encode = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        const decode = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'   
        expect(encode).to.equal('elp xhm xf mbymwwmfj dne');
        expect(decode).to.equal('thinkful');
    });

    it("should return false if there are duplicate letters in alphabet", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
        expect(actual).to.be.false;
    });

    it("should maintain spaces in message", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal('elp xhm xf mbymwwmfj dne');
    });

    it("should ignore capital letters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal('elp xhm xf mbymwwmfj dne');
    });
});
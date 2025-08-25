import { reverseString } from "./reverseString";

describe( "Reverse String", () => {

    test("Hello, World!", () => {

        expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");

    })

    test("Empty", () => {

        expect(reverseString("")).toBe("");

    })

    test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
    })

})
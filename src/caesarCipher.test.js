
import { cipherText } from "./caesarCipher"

describe("CaesarCipher", () => {

    test("wrapping from z to a", () =>{

        expect(cipherText('xyz', 3)).toBe('abc')

    })

    test("Case Preservation", () =>{

        expect(cipherText('HeLLo', 3)).toBe('KhOOr');

    })

    test("Non-Alphabetic character preservation", () => {

        expect(cipherText('Hello, World!', 3)).toBe('Khoor, Zruog!')

    })

})
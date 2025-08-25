import { calculator } from "./calculator";

describe("Calculator", () => {
    
    test("Addition", () =>{

        expect(calculator.add(7,4)).toBe(11);

    })

     test("Substraction", () =>{

        expect(calculator.substract(7,4)).toBe(3);

    })

       test("Multiplication", () =>{

        expect(calculator.multiply(11,4)).toBe(44);

    })

     test("Divide", () =>{

        expect(calculator.divide(49,7)).toBe(7);

    })
    

    


})
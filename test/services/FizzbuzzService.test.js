const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test FizzbuzzService - Metodo (applyValidationInExploerer)",()=>{
    test("1. Validaciones score no divisble entre 5 o 3",()=>{
        const explorer1 = {name:"Explorer1",score:1};
        const type=FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(type.trick).toBe(1);
    });
    test("2. Validaciones score con numero diviseble entre 3",()=>{
        const explorer3 = {name: "Explorer3", score: 3};
        const type=FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(type.trick).toBe("FIZZ");
    });
    test("3. Validaciones score con numero diviseble entre 5",()=>{
        const explorer5 = {name: "Explorer5", score: 5};
        const type=FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(type.trick).toBe("BUZZ");
    });
    test("4. Validaciones score con numero diviseble entre 3 y 5",()=>{
        const explorer15 = {name: "Explorer15", score: 15};
        const type=FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(type.trick).toBe("FIZZBUZZ");  
    });
});

describe("Test FizzbuzzService - Metodo (applyValidationInNumber)",()=>{
    test('1. Numero divisible entre 3 y 5',()=>{
        const fizznumber= FizzbuzzService.applyValidationInNumber(15);
        expect(fizznumber).toBe('FIZZBUZZ')
    })
    test('2. Numero divisible entre 3',()=>{
        const fizznumber= FizzbuzzService.applyValidationInNumber(3);
        expect(fizznumber).toBe('FIZZ')
    })
    test('3. Numero divisible entre 5',()=>{
        const fizznumber= FizzbuzzService.applyValidationInNumber(5);
        expect(fizznumber).toBe('BUZZ')
    })
    test('4. Numero no divisible entre 3 y 5',()=>{
        const fizznumber= FizzbuzzService.applyValidationInNumber(1);
        expect(fizznumber).toBe(1)
    })
})
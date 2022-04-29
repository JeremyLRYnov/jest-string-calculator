import { stringCalculator } from "../js/stringCalculator";

describe('stringCalculator', () => {

    let calculator = new stringCalculator;

    test('String vide, return 0', () => {

        expect(calculator.add("")).toBe(0);
    });

    test("String = '1', return 1", () => {
        
        expect(calculator.add("1")).toBe(1);
    });

    test("String = '1,2', return 1", () => {
        
        expect(calculator.add("1,2")).toBe(3);
    });

    test("String = '1,2,3,4,5,6,7,8,9', return 1", () => {
        
        expect(calculator.add("1,2,3,4,5,6,7,8,9")).toBe(45);
    });

    test("String = '1\n2,3', return 6", () => {
        
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test("String = '//;\n1;2', return 3", () => {
        
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test("String = '-1', toThrow 'Negatives not allowed'", () => {
        
        expect(() => calculator.add("-1").toThrow('Negatives not allowed. [-1]'));
    });
});
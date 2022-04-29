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
});
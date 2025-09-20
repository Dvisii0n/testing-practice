import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from "./main";

test("returns first letter as Uppercase", () => {
    expect(capitalize("test")).toBe("Test");
});

test("returns reversed string", () => {
    expect(reverseString("car")).toBe("rac");
});

describe("calculator", () => {
    test("adds two numbers", () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test("subtracts two numbers", () => {
        expect(calculator.subtract(2, 2)).toBe(0);
    });

    test("multiplies two numbers", () => {
        expect(calculator.multiply(3, 2)).toBe(6);
    });

    test("divides two numbers", () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });
});

describe("caesar cipher", () => {
    test("wraps from z to a", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    test("preserves the original lettercase", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("punctuation remains unchanged", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });
});

describe("analyze array", () => {
    test("correct output", () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });
});

const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../script');

describe("Interest Rate Calculator Tests", () => {
    // Test i
    it("Calculate Simple Interest", () => {
        var actual = calculateSimpleInterest(1000, 5, 1);
        expect(actual).toBe(50);
    });

    // Test ii
    it("Calculate Total Interest", () => {
        var actual = calculateTotalPayableAmount(1000, 50);
        expect(actual).toBe(1050);
    });
});
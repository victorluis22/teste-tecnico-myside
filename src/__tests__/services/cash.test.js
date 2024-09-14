import { formatMoney } from "@/services/cash";

describe("Testing function formatMoney", () => {
    it("Should format a number to the US currency notation", () => {
        const amount = 102;

        expect(formatMoney(amount)).toBe("$102.00");
    });
});
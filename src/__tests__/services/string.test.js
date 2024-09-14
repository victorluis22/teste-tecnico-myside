import { capitalizeFirstLetter, summarizeText } from "@/services/string";

describe("Testing function capitalizeFirstLetter", () => {
    it("Should turn the first letter of the string to upper case", () => {
        const string = "test string";

        expect(capitalizeFirstLetter(string)).toBe("Test string");
    });
});

describe("Testing function summarizeText", () => {
    it("Should truncate a text greater than a chosen amount of characters (60 by default) and add ... in the end", () => {
        const string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

        expect(summarizeText(string)).toBe("Lorem Ipsum is simply dummy text of the printing and typeset...");
        expect(summarizeText(string, 90)).toBe("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...");
    });

    it("Should not truncate a text equal of less than a chosen amount of characters (60 by default)", () => {
        const string = "Lorem Ipsum is simply dummy text.";

        expect(summarizeText(string)).toBe("Lorem Ipsum is simply dummy text.");
    });
});


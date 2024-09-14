import { findProductByName } from "@/services/search";

describe("Testing function findProductByName", () => {
  const products = [
    { title: "Test Product 1" },
    { title: "Another Test Product" },
    { title: "Product 2" }
  ];

  it("Should return products that match the name", () => {
    const result = findProductByName("Test", products);
    expect(result).toEqual([
      { title: "Test Product 1" },
      { title: "Another Test Product" }
    ]);
  });

  it("Should return an empty array if no products match", () => {
    const result = findProductByName("Nonexistent", products);
    expect(result).toEqual([]);
  });
});
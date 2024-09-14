import { getServerSideProps } from "@/pages/index";

global.fetch = jest.fn((url) => {
  if (url.includes("category")) {
    // Simula a resposta da API quando uma categoria é fornecida
    return Promise.resolve({
      json: () => Promise.resolve({
        products: [{ id: 1, title: "Test Product", category: "category1" }],
        categories: ["category1", "category2"],
      }),
    });
  } else {
    // Simula a resposta padrão da API (sem categoria)
    return Promise.resolve({
      json: () => Promise.resolve({
        products: [{ id: 2, title: "Test Product 2" }],
        categories: ["category1", "category2"],
      }),
    });
  }
});

describe("Testing home page getServerSideProps", () => {
  it("Fetches all products and categories when no category is provided", async () => {
    const context = { query: {} };
    const response = await getServerSideProps(context);

    expect(response).toEqual({
      props: {
        currentPageProducts: [{ id: 2, title: "Test Product 2" }],
        categories: ["category1", "category2"],
        currentPage: 1,
        productTotalQtd: 1,
      },
    });
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.in/api/products?limit=150");
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("Fetches products based on a specific category", async () => {
    const context = { query: { category: "category1" } };
    const response = await getServerSideProps(context);

    expect(response).toEqual({
      props: {
        currentPageProducts: [{ id: 1, title: "Test Product", category: "category1" }],
        categories: ["category1", "category2"],
        currentPage: 1,
        productTotalQtd: 1,
      },
    });
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.in/api/products/category?type=category1");
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
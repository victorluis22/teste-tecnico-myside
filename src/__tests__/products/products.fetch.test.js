import { getServerSideProps } from "@/pages/products/[id]";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({
            product: { id: 1, title: "Test Product 1" }
        })
    });
});

describe("Testing Product page getServerSideProps", () => {
  it("Fetches product based on its id", async () => {
    const context = { params: { id: 1 } };
    const response = await getServerSideProps(context);

    expect(response).toEqual({
      props: {
        product: { id: 1, title: "Test Product 1" }
      },
    });
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.in/api/products/1");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
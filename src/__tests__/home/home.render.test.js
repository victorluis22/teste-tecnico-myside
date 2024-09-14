import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";
import theme from "@/config/theme";
import "@testing-library/jest-dom";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

const mockProps = {
    currentPageProducts: [
      {
        id: 1,
        title: "Product 1",
        description: "Description 1",
        image: "/image1.jpg",
        price: 10,
        discount: 0,
      },
      {
        id: 2,
        title: "Product 2",
        description: "Description 2",
        image: "/image2.jpg",
        price: 20,
        discount: 5,
      },
    ],
    categories: ["category1", "category2"],
    currentPage: 1,
    productTotalQtd: 2,
};
  
describe("Testing Home page rendering", () => {
    it("Renders product cards", () => {
        useRouter.mockImplementation(() => ({
            pathname: "/",
            query: {}
        }));

        render(
            <ThemeProvider theme={theme}>
                <Home {...mockProps} />
            </ThemeProvider>
        );
        
        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    it("Displays the correct total of products", () => {
      render(
        <ThemeProvider theme={theme}>
          <Home {...mockProps} />
        </ThemeProvider>
      );
      
      expect(screen.getByText("2 products found")).toBeInTheDocument();
    });
});
  
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";

import Product from "@/pages/products/[id]";
import theme from "@/config/theme";
import "@testing-library/jest-dom";
  
describe("Testing Product page rendering", () => {
    it("Renders product card", () => {
        const mockProps = {
            product: {
                id: 1,
                title: "Product 1",
                description: "Description 1",
                category: "Category 1",
                image: "/image1.jpg",
                price: 10,
                discount: 10,
                brand: "brand 1",
                model: "model 1",
                color: "color 1"
            }
        };

        render(
            <ThemeProvider theme={theme}>
                <Product {...mockProps} />
            </ThemeProvider>
        );

        expect(screen.getByText("Category 1")).toBeInTheDocument();
        expect(screen.getByText("Product 1")).toBeInTheDocument();
        expect(screen.getByText("$11.00")).toBeInTheDocument();
        expect(screen.getByText("$10.00")).toBeInTheDocument();
        expect(screen.getByText("- 10% OFF")).toBeInTheDocument();
        expect(screen.getByText("Brand 1")).toBeInTheDocument();
        expect(screen.getByText("Model 1")).toBeInTheDocument();
        expect(screen.getByText("Color 1")).toBeInTheDocument();
        expect(screen.getByText("Description 1")).toBeInTheDocument();
    });
});
  
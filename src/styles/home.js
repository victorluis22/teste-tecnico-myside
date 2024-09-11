import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ProductsGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1300px;
    gap: 20px;
`;

export const ProductCard = styled.div`
    background-color: var(--foreground);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
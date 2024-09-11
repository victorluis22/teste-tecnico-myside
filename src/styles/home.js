import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ProductsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const ProductsGrid = styled.div`
    display: grid;
    justify-content: center;
    width: 80%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    max-width: 1300px;
    gap: 20px;
`;

export const ProductCard = styled.div`
    background-color: var(--foreground);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
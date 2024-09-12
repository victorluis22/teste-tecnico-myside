import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.background};
`;

export const ProductsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const ProductsGrid = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    max-width: 1300px;
    gap: 20px;
`;

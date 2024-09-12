import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const Grid = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    max-width: ${props => props.theme.widths.max};
    gap: 20px;
`;

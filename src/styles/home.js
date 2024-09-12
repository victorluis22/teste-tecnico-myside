import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 30px;
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const AdjustmentsContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const ProductsContainer = styled.div`
    display: flex;
    margin: 10px 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Grid = styled.div`
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    max-width: ${props => props.theme.widths.max};
    gap: 20px;
`;

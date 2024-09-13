import styled from "styled-components";

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

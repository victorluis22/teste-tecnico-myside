import styled from "styled-components";

export const Container = styled.div`
    
`;

export const OriginalPrice = styled.p`
    opacity: 0.7;
    text-decoration: line-through;
`;

export const ActualPrice = styled.div`
    display: flex;
    gap: 5px;
    font-size: large;
    font-weight: bold;
`;

export const Discount = styled.span`
    color: ${props => props.theme.colors.details};
`;
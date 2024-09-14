import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-bottom: 1px solid ${props => props.theme.colors.background};
    gap: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
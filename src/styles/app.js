import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    flex: 1;
    background-color: ${props => props.theme.colors.background};

    @media screen and (min-width: 800px) {
        padding: 30px;
    }
`;
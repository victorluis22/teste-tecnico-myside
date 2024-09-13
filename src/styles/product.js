import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.colors.foreground};
    max-width: ${props => props.theme.widths.max};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    padding: 20px;
    gap: 20px;

    @media screen and (min-width: 800px) {
        width: 90%;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 800px) {
        flex-direction: row;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    justify-self: center;
    align-self: center;

    @media screen and (min-width: 800px) {
        width: 400px;
        height: 400px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    @media screen and (min-width: 800px) {
        width: 50%;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

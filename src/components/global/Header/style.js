import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: ${props => props.theme.colors.foreground};

    @media screen and (min-width: 400px) {
        align-items: center;
    }

    @media screen and (min-width: 800px) {
        padding: 10px 30px;
    }

`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    @media screen and (min-width: 400px) {
        width: 70%;
        flex-direction: row;
        align-items: center;
    }

    @media screen and (min-width: 800px) {
        width: 50%;
    }
`;

export const SearchBar = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.background};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.background};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 100%;
    padding: 10px 20px;
    gap: 20px;
`;

export const SearchBarInput = styled.input`
    width: 90%;
    max-width: ${props => props.theme.widths.max};
    background-color: transparent;
    outline: none;
    border: none;
    padding-right: 10px;
    border-right: 1px solid ${props => props.theme.colors.highlight};
`;
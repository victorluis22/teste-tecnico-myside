import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 30px;
    gap: 20px;
    background-color: ${props => props.theme.colors.foreground};
`;

export const SearchBar = styled.input`
    border: 1px solid ${props => props.theme.colors.background};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.background};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px 20px;
    width: 40%;
`;

export const ShoppingCart = styled.div`
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme.colors.highlight};
        color: ${props => props.theme.colors.foreground};
        transition: 0.7s background-color;
    }
`;
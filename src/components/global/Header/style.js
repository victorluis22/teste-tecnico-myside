import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    gap: 20px;
`;

export const SearchBar = styled.input`
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.background};
    padding: 10px 20px;
    width: 40%;
`;

export const CartButton = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
`;
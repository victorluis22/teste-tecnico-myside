import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.highlight};
    padding: 20px;
    width: fit-content;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${props => props.theme.colors.foreground};
    font-weight: bold;
    gap: 20px;

    &:hover{
        filter: brightness(80%);
        transition: 0.3s filter;
    }
`;
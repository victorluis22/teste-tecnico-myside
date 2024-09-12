import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center; 
`;

export const Card = styled.div`
    width: 80%;
    background-color: ${props => props.theme.colors.foreground};
    max-width: ${props => props.theme.widths.max};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    padding: 20px;
    margin: 30px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.colors.highlight};
    padding: 20px;
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${props => props.theme.colors.foreground};
    font-weight: bold;

    &:hover{
        filter: brightness(80%);
        transition: 0.3s filter;
    }
`;

export const Details = styled.div`

`;

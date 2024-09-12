import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.colors.foreground};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.64) 0px 3px 8px;
        transition: 0.5s box-shadow;
    }
`;
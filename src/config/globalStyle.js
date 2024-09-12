import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
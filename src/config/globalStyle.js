import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
  }

  p, span, h1, h2, h3, h4 {
    color: ${props => props.theme.colors.text};
  }

  input, select, textarea, button {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
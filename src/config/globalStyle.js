import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
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

  button{
    background-color: transparent;
    border: none;
  }
`;

export default GlobalStyle;
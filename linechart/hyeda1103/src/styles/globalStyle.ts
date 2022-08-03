import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    line-height: 1.5;
  }
`;

export default GlobalStyle;

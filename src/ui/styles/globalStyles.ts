import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.rebecca_purple};
    color: ${({ theme }) => theme.colors.dark_blue_grey};

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }
`;

export { GlobalStyle };

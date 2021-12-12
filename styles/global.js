import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

    @font-face {
        font-family: "Nunito Sans";
    }

    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${({theme}) => theme.background};
        color : ${({theme}) => theme.text};
        font-family: "Nunito Sans";
        font-size: 14px;
    }

    button {
        color : ${({theme}) => theme.text};
    }
`;

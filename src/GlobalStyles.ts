import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Exo:wght@100;400;500;600&display=swap');

    body{
       font-family: 'Exo', sans-serif;
       //font-family: Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif; 

        margin: 0px;
        padding: 0px;
        font-size: 16px;
        font-weight: 500;
    }
`;

export default GlobalStyles;

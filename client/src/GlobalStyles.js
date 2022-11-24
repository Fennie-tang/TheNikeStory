import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --primary-color: black;
      --page-horizontal-padding: 20px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --heading-font-family: 'ariel', sans-serif;
     
    }
    html, body, div, span,
    h1, h2, h3, h4, h5, h6, p,  img, 
     ol, ul, li, form, label, 
    footer, header,
    menu, nav,  section
     {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }`
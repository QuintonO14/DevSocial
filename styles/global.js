import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  html {
    height: 100%;
  }

  #__next {
    height: 100%;
    background-color: rgba(50, 50, 50, 1)
  }

 

`

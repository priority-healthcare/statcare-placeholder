import styled, { createGlobalStyle } from "styled-components/macro"
import "fontsource-exo-2"

const GlobalStyles = createGlobalStyle`
/* STICKY FOOTER */
html, body, #___gatsby {
    margin: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @supports (display: grid) {
      height: 100%;
    }
  }
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #StickyFooter--body {
    flex: 1 0 auto;
  }
  #SiteFooter {
    flex-shrink: 0;
  }

  body {
    font-family: 'Exo 2', sans-serif
  }
`

export default GlobalStyles

export const PageMargin = styled.div`
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 1500px) {
    width: 1200px;
  }
`

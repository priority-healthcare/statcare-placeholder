import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components/macro"
import Footer from "../components/Footer"
import GlobalStyles, { PageMargin } from "../GlobalStyles"

const LogoStyles = styled.img`
  width: 90%;
  display: block;
  margin: 20px auto 70px;
  @media screen and (min-width: 400px) {
    width: unset;
  }
  
<div> hi </div>
  

const AnnouncementStyles = styled.h2`
  display: block;
  margin: 0 auto;
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
  font-size: 70px;
  font-weight: 100;
  text-transform: uppercase;
`

export default function Home({ data }) {
  const pageData = data.site.siteMetadata
  console.log(pageData)

  return (
    <>
      <GlobalStyles />
      <div id="StickyFooter--body">
        <PageMargin>
          <LogoStyles src={pageData.logoUrl} alt={pageData.title} />
          <AnnouncementStyles>Site coming soon1</AnnouncementStyles>
          test 2
        </PageMargin>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        logoUrl
      }
    }
  }
`

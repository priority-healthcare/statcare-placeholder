import React from "react"
import styled from "styled-components/macro"
import { PageMargin } from "../GlobalStyles"

const FooterStyles = styled.footer`
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 20px;
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterStyles id="SiteFooter">
      <PageMargin>&copy; {year} StatCare.</PageMargin>
    </FooterStyles>
  )
}

export default Footer

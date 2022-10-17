import * as React from "react"
import Seo from "../components/seo"
import About from './about'

const IndexPage = () => (
  <About/>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Marlon Schlosshauer" />

export default IndexPage

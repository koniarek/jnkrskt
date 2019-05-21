import React from 'react'
import { graphql } from 'gatsby'

import HeaderVideo from '../components/HeaderVideo'
import Layout from '../components/Layout'
import Portals from '../components/Portals'

// Export Template for use in CMS preview
export const ProductIndexTemplate = ({ title, headerVideo, portals }) => (
  <main className="product">
    <HeaderVideo source={headerVideo} title={title} />

    {portals && (
      <section>
        <div className="wide">
          <Portals portals={portals} />
        </div>
      </section>
    )}
  </main>
)



const ProductIndex = ({ data: { page } }) => (
  <Layout>
    <ProductIndexTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProductIndex

export const pageQuery = graphql`
  ## Query for ProductIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        headerVideo
        portals {
          title
          image
          productLink
        }
      }
    }
  }
`

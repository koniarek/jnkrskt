import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const ComponentsPage2Template = ({
	                                       title,
	                                       subtitle,
	                                       featuredImage,
	                                       section1,
	                               
	                                       body,
	                                       gallery
                                       }) => (
	<main>
		<PageHeader
			title={title}
			subtitle={subtitle}
			backgroundImage={featuredImage}
		/>
		<section className="section">
			<div className="container">
				<Content source={section1} />
			</div>
		</section>

		<section className="section">
			<div className="container">
				<h2>Our gallery component</h2>
				<Gallery images={gallery} />
			</div>
		</section>
	</main>
)

const ComponentsPage2 = ({ data: { page } }) => (
	<Layout
		meta={page.frontmatter.meta || false}
		title={page.frontmatter.title || false}
	>
		<ComponentsPage2Template {...page} {...page.frontmatter} body={page.html} />
	</Layout>
)

export default ComponentsPage2

export const pageQuery = graphql`
  query ComponentsPage2($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
       
      }
    }
  }
`

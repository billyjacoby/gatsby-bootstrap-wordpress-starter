import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = props => {
  const {
    data: { wordpressPage },
  } = props
  return (
    <Layout pageInfo={{ pageName: wordpressPage.slug }}>
      <SEO title={wordpressPage.title} />
      <main>
        <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
      </main>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String) {
    wordpressPage(id: { eq: $id }) {
      content
      menu_order
      slug
      title
      type
      status
    }
  }
`

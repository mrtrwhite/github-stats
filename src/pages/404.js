import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1 className="title">NOT FOUND</h1>
    </div>
  </Layout>
)

export default NotFoundPage

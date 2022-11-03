import React from "react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

export const NotFoundPage = () => (
  <Layout>
    <h1>404: Not found</h1>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

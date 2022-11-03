import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ title, description, imageUrl, author, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title ?? site.siteMetadata?.title;
  const metaDescription = description ?? site.siteMetadata.description;
  const metaImageUrl = imageUrl ?? site.siteMetadata?.image;
  const metaAuthor = author ?? site.siteMetadata?.image;
  const siteUrl = site.siteMetadata?.siteUrl;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={`${siteUrl}${metaImageUrl}`} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteUrl}${metaImageUrl}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Marlon Schlosshauer" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={metaAuthor} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo

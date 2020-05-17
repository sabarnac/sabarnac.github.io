/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

import SchemaOrg from "./schema-org"

const SEO = ({
  description,
  location,
  lang,
  meta,
  title,
  postPublishDate,
  isPost,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
            }
            description
            social {
              Twitter
            }
          }
        }
      }
    `
  );

  const siteAuthor = site.siteMetadata.author.name;
  const metaTitle = `${title} | ${site.siteMetadata.title}`;
  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.siteUrl}${location.pathname}`;
  const datePublished = isPost ? postPublishDate : false;

  return (
    <>
      <Helmet>
        {/* General tags */}
        <html lang={lang} />
        <title>{metaTitle}</title>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={metaUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={metaUrl} />
        {isPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:creator"
          content={site.siteMetadata.social.Twitter}
        />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        {meta.map(metaDetails => (
          <meta key={metaDetails.name} {...metaDetails} />
        ))}

        {/* Google Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,600,700|Roboto:400,600,700&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>{`
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,600,700|Roboto:400,600,700&display=swap"
          />
        `}</noscript>
      </Helmet>
      <SchemaOrg
        isPost={isPost}
        url={metaUrl}
        title={metaTitle}
        description={metaDescription}
        datePublished={datePublished}
        siteUrl={site.siteMetadata.siteUrl}
        author={siteAuthor}
        defaultTitle={site.siteMetadata.title}
      />
    </>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  isPost: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  isPost: PropTypes.bool,
  postPublishDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.any.isRequired,
};

export default SEO;

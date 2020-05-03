import { graphql, Link } from "gatsby"
import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogList = ({
  data,
  location,
  pageContext: { numPages, currentPage },
}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h2
                style={{
                  marginTop: rhythm(1),
                  marginBottom: rhythm(1 / 4),
                  fontSize: rhythm(1),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, textDecoration: `none` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h2>
              <div
                style={{
                  display: `flex`,
                  justifyContent: `space-between`,
                  paddingBottom: rhythm(1),
                }}
              >
                <small>Written: {node.frontmatter.date}</small>
                <small>Reading Time: {node.timeToRead} minutes</small>
              </div>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  display: `block`,
                  textAlign: `right`,
                }}
                to={node.fields.slug}
              >
                Read more...
              </Link>
            </section>
          </article>
        );
      })}

      <nav>
        <ul>
          <li>
            {currentPage > 1 && (
              <Link to={`/${currentPage - 1}`} rel="next">
                ← Newer Posts
              </Link>
            )}
          </li>
          <li>
            {currentPage < numPages && (
              <Link to={`/${currentPage + 1}`} rel="prev">
                Older Posts →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogList;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

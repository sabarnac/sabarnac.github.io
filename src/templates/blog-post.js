import { graphql, Link } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"
import React from "react"
import rehypeReact from "rehype-react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const BlogPostTemplate = ({
  data,
  pageContext: { previous, next },
  location,
}) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl}${location.pathname}`,
    identifier: post.id,
    title: post.frontmatter.title,
  };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <div
            style={{
              ...scale(0.15),
              paddingBottom: rhythm(1),
              display: `flex`,
              justifyContent: `space-between`,
            }}
          >
            <small>Written: {post.frontmatter.date}</small>
            <small>Reading Time: {post.timeToRead} minutes</small>
          </div>
        </header>
        <section>{renderAst(post.htmlAst)}</section>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav>
        <ul>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div className="comments">
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(1),
          }}
        >
          Comments
        </h3>
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 250)
      timeToRead
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { rhythm, scale } from "../utils/typography"
import { isBlogPostPage } from "./util"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      icon: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          description
          author {
            name
            summary
          }
          social {
            Twitter
            LinkedIn
          }
        }
      }
    }
  `);

  const SiteTitleComponent = isBlogPostPage() ? "h1" : "h3";

  const header = (
    <SiteTitleComponent
      style={{
        ...scale(1.5),
        margin: rhythm(0.5),
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-evenly`,
      }}
    >
      <Image
        fixed={data.icon.childImageSharp.fixed}
        alt={title}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: rhythm(1 / 4),
        }}
        imgStyle={{
          borderRadius: rhythm(1 / 4),
          border: 0,
        }}
      />
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </SiteTitleComponent>
  );
  return (
    <div>
      <header
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          background: `#222222`,
          textAlign: `center`,
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          marginBottom: rhythm(1.5),
          borderRadius: `0 0 ${rhythm(1)} ${rhythm(1)}`,
        }}
      >
        {header}
      </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `0 ${rhythm(3 / 4)}`,
          minHeight: `67.5vh`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          background: `#222222`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          textAlign: `center`,
          borderRadius: `${rhythm(1)} ${rhythm(1)} 0 0`,
        }}
      >
        &copy; {new Date().getFullYear()} | Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        using{" "}
        <a
          href="https://github.com/gatsbyjs/gatsby-starter-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby Blog Starter
        </a>
      </footer>
    </div>
  );
};

export default Layout;

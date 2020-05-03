/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import { rhythm } from "../utils/typography"

const socialLinksPrefix = {
  Twitter: "https://twitter.com/",
  LinkedIn: "https://linkedin.com/in/",
};

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
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

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        background: `#222222`,
        color: `#ffffff`,
        padding: rhythm(1),
        borderRadius: rhythm(1 / 2),
        marginBottom: rhythm(1),
      }}
    >
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
            border: `1px solid #111111`,
          }}
        />
        <div>
          <div>
            Written by <strong>{author.name}</strong>
          </div>
          <div>{author.summary}</div>
          <div style={{ textAlign: `right`, height: rhythm(1) }}>
            {Object.keys(social).map(key => (
              <a
                key={key}
                href={`${socialLinksPrefix[key]}${social[key]}`}
                className="social-link"
                target="_blank"
              >
                <i className={`socicon-${key.toLowerCase()}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

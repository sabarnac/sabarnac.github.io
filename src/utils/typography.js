import Typography from "typography"
import SternGrove from "typography-theme-stern-grove"

SternGrove.overrideThemeStyles = () => ({
  "html, body": {
    background: `#000000`,
  },
  "#site-title": {
    ...typography.scale(1),
    margin: typography.rhythm(1 / 2),
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  "#site-title > a": {
    paddingTop: typography.rhythm(1 / 2),
  },
  "@media only screen and (min-width:25rem)": {
    "#site-title": {
      ...typography.scale(1),
      margin: typography.rhythm(1 / 2),
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-evenly`,
    },
    "#site-title > a": {
      paddingTop: 0,
    },
  },
  a: {
    color: `#0077ee`,
    textDecoration: `none`,
  },
  "h2 > a": {
    color: `#eeeeee`,
    textDecoration: `none`,
  },
  "h2 > a:hover": {
    color: `#ee3322`,
  },
  "a.social-link": {
    padding: `0 ${typography.rhythm(1 / 4)}`,
    fontSize: typography.rhythm(1 / 2),
    color: `#ff8866`,
    borderLeft: `1px solid #ffffff`,
  },
  "a.social-link:first-child": {
    borderLeft: `none`,
  },
  "a.social-link:hover": {
    color: `#ee3322`,
  },
  img: {
    display: `block`,
    margin: `0 auto`,
    border: `1px solid #eeeeee`,
    padding: `1px`,
  },
  "a.gatsby-resp-image-link": {
    boxShadow: `none`,
  },
  "article > section": {
    textAlign: `justify`,
  },
  "div.gatsby-highlight[data-language]": {
    fontSize: `16px`,
    marginBottom: typography.rhythm(1),
    backgroundColor: `#171717`,
  },
  "div.gatsby-highlight[data-language] > pre": {
    overflowX: `auto`,
    margin: 0,
    padding: typography.rhythm(1 / 2),
    background: `none`,
  },
  "div.gatsby-highlight[data-language] > pre > code": {
    background: `none`,
    boxShadow: `none`,
  },
  article: {
    borderBottom: `1px dashed #eeeeee`,
    paddingBottom: typography.rhythm(1),
  },
  "nav > ul > li": {
    margin: 0,
  },
  "nav > ul": {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: `${typography.rhythm(1)} 0`,
    margin: 0,
  },
  "div.comments": {
    borderTop: `1px solid #eeeeee`,
    paddingTop: typography.rhythm(1),
  },
  blockquote: {
    borderLeft: `${typography.rhythm(1 / 4)} solid #252525`,
    padding: `${typography.rhythm(1 / 2)} ${typography.rhythm(2 / 3)}`,
    background: `#171717`,
    color: `#eeeeee`,
  },
  "div.twitter-tweet": {
    margin: `${typography.rhythm(1)} auto ${typography.rhythm(
      1
    )} auto !important`,
  },
});

const typography = new Typography({
  ...SternGrove,
  googleFonts: [],
  headerFontFamily: [`Roboto`, `sans-serif`],
  bodyFontFamily: [`Roboto Condensed`, `sans-serif`],
  headerColor: `#eeeeee`,
  bodyColor: `#ffffff`,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

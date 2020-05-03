import Typography from "typography"
import SternGrove from "typography-theme-stern-grove"

SternGrove.overrideThemeStyles = () => ({
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
    fontSize: typography.rhythm(1),
    color: `#ff8866`,
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
  "html, body": {
    background: `#000000`,
  },
  "article > section": {
    textAlign: `justify`,
  },
  "div.gatsby-highlight[data-language]": {
    fontSize: `16px`,
    marginBottom: typography.rhythm(1),
  },
  "div.gatsby-highlight[data-language] > pre": {
    overflowX: `auto`,
    margin: 0,
    padding: 0,
  },
  article: {
    borderBottom: `1px solid #eeeeee`,
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
});

const typography = new Typography({
  ...SternGrove,
  googleFonts: [
    {
      name: `Roboto Condensed`,
      styles: [`400`, `600`, `700`],
    },
    {
      name: `Roboto`,
      styles: [`400`, `600`, `700`],
    },
  ],
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

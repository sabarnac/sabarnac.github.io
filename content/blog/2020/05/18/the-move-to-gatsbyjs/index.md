---
title: The Move to GatsbyJS
date: 2020-05-18 00:01:30 +0530
---

![GatsbyJS plus Markdown is love ❤️](./gatsby-plus-markdown.png)

> **TL;DR:** My reasons for moving:
>
> - I wanted to have the possibility to put in JS things into my blog posts in an organized way.
> - I'm more comfortable with React and Gatsby than with Jekyll.

This blog was initially created using [Jekyll](https://jekyllrb.com/) through the use of [JekyllBootstrap](http://jekyllbootstrap.com/), which I had found online. The decision to go with it was that I didn't want to put a lot of effort into getting a blog up and running on [GitHub Pages](https://pages.github.com/), but still have a little customization over aesthetics.

However, after trying to fiddle about with it for a little bit, I did decide to go with a theme built for Jekyll Boostrap called [The Minimum](https://github.com/jekyllbootstrap/theme-the-minimum), and just try to modify it in the way I wanted to style my blog (didn't do much though).

I slowly stopped writing blog posts, but now do feel like getting back in the groove and starting writing here again. However, I wanted to have the ability to put in little JS app thingies in my posts.

While doing it with the Jekyll site I had set up is quite possible, having to put in script tags and write my examples in there felt unorganized.

I've also been developing in [React](https://reactjs.org/) for a few years now, and have grown really used to the developer experience it provides. So being able to run JS apps in a framework I'm familiar with would help me a lot to get stuff written fast and (somewhat) properly.

Knowing that I wanted to work in React for my blog, the most obvious choice was to use [Gatsby](https://www.gatsbyjs.org/). This had another benefit of me being very familiar with Gatsby, so I could customize it the way I wanted to. Gatsby also had a [starter blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) I could use to start my blog. Perfect!

The starter blog already had a lot of things configured:

- It has a [plugin](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) pre-loaded for supporting markdown blog posts, which meant I could easily port over the posts I had already written up in the Jekyll blog.
- It has a [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/) pre-loaded for generating an RSS feed. Just needed to update the plugin configuration.
- It has a [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/) pre-loaded for [TypographyJS](https://kyleamathews.github.io/typography.js/) support, with it configured using the [Wordpress 2016](https://www.npmjs.com/package/typography-theme-wordpress-2016) theme.
- It has a [plugin](gatsby-remark-prismjs) for [PrismJS](https://prismjs.com/) support for code block syntax-highlighting.

This was a great base to start off from. First I removed the Wordpress 2016 and swapped it out with [Stern Grove](https://www.npmjs.com/package/typography-theme-stern-grove), and then made several additions and some changes to match my tastes (which are terrible), including a font switch to the [Roboto family](https://fonts.google.com/specimen/Roboto) (normal for headers and condensed for body).

I had initially added in [Socicon](https://www.socicon.com/) for putting [Twitter](https://twitter.com/) and (LinkedIn)[https://www.linkedin.com/] profile links in my bio section, but later removed it because I didn't think downloading an additional font just for two icons really made any sense. There's just text links there now instead (which is great for accessibility).

I swapped out the default PrismJS theme being used with [prism-funky](https://github.com/PrismJS/prism/blob/master/themes/prism-funky.css). Even though the theme is a dark theme, I still needed to make some changes so that it matched the rest of the style of the blog.

I also added additional plugins to the Markdown transformer plugin to add [support for embedding React components](https://www.gatsbyjs.org/packages/gatsby-remark-component/), [embedding tweets](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/), and [embedding code snippets from files](https://www.gatsbyjs.org/packages/gatsby-remark-embed-snippet/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Why did I tweet this</p>&mdash; Sabarna Chakravarty (@sabarnachk) <a href="https://twitter.com/sabarnachk/status/1262107797610618880?ref_src=twsrc%5Etfw">May 17, 2020</a></blockquote>

Finally, I added [Disqus](https://disqus.com/) for commenting on posts, and used a [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-preact/) to swap out React with Preact to reduce build and page sizes slightly.

I had also initially added a [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-no-javascript/) for removing Javascript from the Gatsby generated pages, but removed it because I had misunderstood it's functionality.

From reading the docs, I assumed it only removed the core GatsbyJS code that didn't really matter, such as client-side navigation code and such, but it appeared to actually remove all JS code generated by both Gatsby _and_ the plugins, meaning I lost out on Disqus and "JS in my posts" support.

I could add exceptions into the plugin to prevent them from being excluded, but those require a few of the core JS files Gatsby generates anyways, so it didn't seem worth it. The main JS heavy code seems to be from Disqus, where around 200KB of the 300+KB of JS my website was loading came from Disqus.

All in all, it was overall pretty painless move, other than trying to figure out the JS removal plugin of Gatsby. I might keep tweaking the site, and hopefully I don't put off blog-writing to the point that when I come back again, I get used to another framework and now want to shift my blog to that, repeating the whole cycle again.

Well, fingers crossed!

#### Update:

Improved the SEO of the website, as well as the performance slightly. Grabbed a [better SEO component and a SchemaOrg component](https://github.com/jlengstorf/gatsby-theme-jason-blog/tree/master/src/components/SEO) from a [gatsby blog theme repo](https://github.com/jlengstorf/gatsby-theme-jason-blog/) of all places.

Also deferred loading of the Google Fonts I'm using by following [Google's article](https://web.dev/defer-non-critical-css/) about it. This did require telling TypographyJS not to download any fonts.
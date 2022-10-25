module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Marlon Schlosshauer - Software developer`,
    description: `I'm a full-stack + mobile developer from Germany that loves to build products fast and design features with the 80:20 rule.`,
    twitterUsername: `@marlonschlosshauer`,
    githubUsername: `@marlonschlosshauer`,
    author: `Marlon Schlosshauer`,
    image: `/card.png`,
    siteUrl: `https://marlonschlosshauer.de`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `none`,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `#1E5B51`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1E5B51`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#1E5B51`,
        display: `minimal-ui`,
        icon: './static/favicon.png'
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-unwrap-images",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        }
      }
    },

  ],
}

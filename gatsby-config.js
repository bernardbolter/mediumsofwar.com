module.exports = {
  siteMetadata: {
    siteUrl: `https://mediumsofwar.com`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-52011615-3"
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/fav.svg"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'paintings',
        path: './src/data/'
      }
    },
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: "images"
    },
  ]
};
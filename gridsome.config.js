// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Sagiri Dev',
  siteUrl: 'https://sagiridev.github.io',
  siteDescription: 'A cute Discord bot who will love you and call you onii-chan :)',
  templates: {
    Post: '/blog/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#455864",
        icon_path: "./static/logos/sq-rn.png",
        name: "Sagiri Dev",
        short_name: "Sagiri",
        theme_color: "#455864",
        lang: "en",
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ],
}

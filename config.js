const config = {
  gatsby: {
    pathPrefix: '/steplore-documentation',
    siteUrl: 'https://serapion-gmbh.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  
  header: {
    /*logo: 'src/components/images/steplore-logo.svg',*/
    logo: 'src/components/images/favicon/favicon-96x96.png',
    logoLink: 'https://step-lore.com/',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/welcome-to-steplore', // add trailing slash if enabled above
      '/getting-started',
      "/use-cases",
      "/faq", 
      "/terms-and-conditions",
      "/privacy-policy"
    ],
    collapsedNav: [
      '/welcome-to-steplore', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'StepLore Extension Documentation',
    description: 'Documentation for Steplore',
    ogImage: '',
    docsLocation: '',
    favicon: 'src/components/images/favicon/favicon-96x96.png',
  },
  pwa: {
    enabled: true,
    manifest: {
      name: 'StepLore Extension Documentation',
      short_name: 'StepLoreDocs',
      start_url: '/',
      background_color: '#F8F9FA',
      theme_color: '#F8F9FA',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'src/components/images/favicon/favicon-96x96.png',
      icons: [
        {
          src: 'src/components/images/steplore-logo.svg',
          sizes: `512x512`,
          type: `image/svg+xml`,
        },
      ],
    },
  },
};

module.exports = config;

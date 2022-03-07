// @ts-check

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DEPA World',
  tagline: 'The complete reference for DEPA',
  url: 'https://depa.world',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'iSPIRT', // Usually your GitHub org/user name.
  projectName: 'depa', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    algolia: {
      apiKey: '829457a9c9dd5a8ddd31d08c86e154c2',
      indexName: 'depa',
      contextualSearch: true,
    },
    imageZoom: {
      selector: '.markdown :not(a) > img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    cards: [
      {
        title: 'Learn',
        image: 'img/learn.svg',
        link: 'learn/about-depa/an-introduction-to-depa',
        description:
          'Learn about DEPA, its guiding principles, the ecosystem, network and more.',
      },
      {
        title: 'Specification',
        image: 'img/specification.svg',
        link: 'specification/about-spec',
        description:
          'Understand the details of the APIs and flows that make up the architecture.',
      },
    ],
    navbar: {
      hideOnScroll: true,
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: '^/$',
        },
        {
          label: 'Learn',
          to: 'learn/about-depa/an-introduction-to-depa',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Specification',
          to: 'specification/about-spec',
          activeBaseRegex: '^/specification/.*',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About DEPA',
              to: 'learn/about-depa/an-introduction-to-depa',
            },
            {
              label: 'Consent Artefact',
              to: 'learn/consent-artefact',
            },
            {
              label: 'Networks',
              to: 'learn/networks/ecosystem-and-network',
            },
            {
              label: 'Glossary',
              to: 'learn/glossary',
            },
          ],
        },
        {
          title: 'SPECIFICATION',
          items: [
            {
              label: 'About APIs and Flows',
              to: 'specification/about-spec',
            },
            {
              label: 'Entity Resolution',
              to: 'specification/entity-resolution',
            },
            {
              label: 'Data Provider Disovery',
              href: 'specification/data-provider-discovery',
            },
            {
              label: 'Mutual TLS Establishment',
              to: 'specification/mtls-establishment',
            },
            {
              label: 'Linking',
              to: 'specification/linking/linking-flow',
            },
            {
              label: 'Flows',
              to: 'specification/flows/consent-flow',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/iSPIRT/DEPA',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'IOTA Wiki',
              href: 'https://wiki.iota.org',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} DEPA Global. Built with Docusaurus, using the IOTA Wiki template.`,
    },
    colorMode: {
      defaultMode: 'light',
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: 'light_mode',

        // CSS to apply to dark icon
        darkIconStyle: {
          fontFamily: 'Material Icons',
        },

        lightIcon: 'dark_mode',

        lightIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iSPIRT/depa/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'specification',
        path: 'internal/specification',
        routeBasePath: 'specification',
        sidebarPath: require.resolve('./internal/specification/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iSPIRT/depa/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    /* AUTO GENERATED EXTERNAL DOCS CONFIG */
  ],
};

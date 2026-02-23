module.exports = {
  title: 'DeliveryHub',
  tagline: 'Your data—protected, encrypted, and delivered securely every time.',
  url: 'https://althub.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  organizationName: 'althub.com',
  projectName: 'deliveryhub',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // 👇 ADD THIS - it's missing!
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    navbar: {
      title: 'DeliveryHub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/AltHubLogo-Invisage-1.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Go-To-Docs',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'AltHub',
              href: 'https://althub.com/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DeliveryHub, Inc. Built with AltHub.com.`,
    },
  }
};
export default {
    title: 'Payavel',
    description: 'Payment integration for Laravel Developers',
    cleanUrls: true,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: 'icon.svg' }],
    ],
    themeConfig: {
        logo: { light: '/logo-light.png', dark: 'logo-dark.png', alt: 'Payavel' },
        siteTitle: false,
        nav: [
            {
                text: 'Guide',
                link: '/guide',
                activeMatch: '/guide'
            },
            {
                text: 'API',
                link: '/api',
                activeMatch: '/api'
            }
        ],
        sidebar: {
            '/guide': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        {
                            text: 'Introduction',
                            link: '/guide',
                        },
                        {
                            text: 'Quick Start',
                            link: '/guide/quick-start'
                        },
                        {
                            text: 'Manual Setup',
                            link: '/guide/manual-setup'
                        }
                    ]
                },
                {
                    text: 'Fundamentals',
                    collapsed: false,
                    items: [
                        {
                            text: 'Providers',
                            link: '/guide/providers'
                        },
                        {
                            text: 'Merchants',
                            link: '/guide/merchants'
                        }
                    ]
                },
                {
                    text: 'Digging Deeper',
                    collapsed: false,
                    items: [
                        {
                            text: 'Drivers',
                            link: '/guide/drivers'
                        }
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © ' + (new Date).getFullYear() + ' Robert Kujawa'
        }
    }
}

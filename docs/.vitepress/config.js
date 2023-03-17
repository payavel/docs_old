export default {
    title: 'Payavel',
    description: 'Payment integration for Laravel Developers',
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
        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © ' + (new Date).getFullYear() + ' Robert Kujawa'
        }
    }
}

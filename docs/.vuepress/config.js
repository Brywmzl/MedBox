module.exports = {
    base: '/MedBox/',
    // dest: 'public',
    title: 'MedBox',
    description: 'Rhino Utility Plugin & Grasshopper Component',
	head: [['link', { rel: 'icon', href: '/img/icon.png' }]],
	theme: 'reco',
	contentLoading: true,
    sidebarDepth: 2,
    themeConfig: {
        // type: 'blog',
        author: 'Brywmzl',
		// logo: '/img/icon.png',
        sidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Releases', link: 'https://github.com/Brywmzl/MedBox/releases' },
            { 
                text: 'Menu', 
                items: [
                    { text: 'Github', link: 'https://github.com/Brywmzl/MedBox' }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        '/guide/'
                    ]
                }
            ]
        }
    }
}
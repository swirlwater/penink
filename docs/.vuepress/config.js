module.exports = {
    title: 'Pen-ink',
    description: 'Just playing around',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Pen-ink',
            description: 'Vue 驱动的静态网站生成器'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Pen-ink',
            description: 'Vue-powered Static Site Generator'
        }
    },
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'pen-ink的博客',
                items: [
                    {
                        text: 'github',
                        link: 'https://github.com/pen-ink'
                    }
                ]
            }
        ]
    }
}
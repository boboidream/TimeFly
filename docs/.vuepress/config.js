module.exports = {
  title: '一肩月光 · 所读所看',
  description: 'Read and See.',
  head: [
    ['link', { rel: 'icon', href: 'https://www.wenboz.com/favicon.ico' }]
  ],
  base: '/TimeFly/',
  themeConfig: {
    nav: [
      { text: 'Blog', link: 'https://www.wenboz.com' },
      { text: 'Github', link: 'https://github.com/boboidream/note' },
    ],
    docsRepo: 'boboidream/TimeFly',
    docsDir: '/',
    lastUpdated: 'Last Updated',
  },
  plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true, "stripNumbers": false}], 'rpurl'],
  chainWebpack: (config, isServer) => {
    const inlineLimit = 10000
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: inlineLimit,
          name: `assets/img/[name].[hash:8].[ext]`
        })
  }
}

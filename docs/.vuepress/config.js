const { description }  = require('../../package')
const { defaultTheme } = require('@vuepress/theme-default')
const readFileList     = require('../../scripts/readFileList.js');
module.exports         = {
  title: '前端文档',
  description: description,
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    logo: '/images/logo.png',
    // repo: '',
    docsRepo: 'https://github.com/305810827/myDocs',
    // editLinks: false,
    docsDir: 'docs',
    // editLinkText: '',
    sidebarDepth: 2,
    // lastUpdated: false,
    navbar: require('./nav'),
    sidebar:require('./sidebar')
  }),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [
  //   '@vuepress/plugin-back-to-top',
  //   '@vuepress/plugin-medium-zoom',
  // ]
}

import {description} from '../../package.json'
import {defaultTheme} from '@vuepress/theme-default'
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import nav from "./nav"
import sidebar from "./sidebar"
import path from 'path';

export default {
  title: '前端文档',
  description: description,
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { type:"text/css", rel:"stylesheet", href:"//cdn.jsdelivr.net/npm/jsmind/style/jsmind.css" }],
  ],

//  <link type="text/css" rel="stylesheet" href="//cdn.jsdelivr.net/npm/jsmind/style/jsmind.css"/>
  
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
    navbar: nav,
    sidebar: sidebar
  }),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: [
  //   '@vuepress/plugin-back-to-top',
  //   '@vuepress/plugin-medium-zoom',
  // ]
  plugins: [
    registerComponentsPlugin({
      // 配置项
      components: {
        Mind: path.resolve(__dirname, './components/Mind.vue'),
        Math: path.resolve(__dirname, './components/Math.vue'),
        English: path.resolve(__dirname, './components/English.vue'),
        Politics: path.resolve(__dirname, './components/Politics.vue'),
      },
    }),
  ],
}

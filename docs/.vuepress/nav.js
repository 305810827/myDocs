import readFileList from "../../scripts/readFileList.js"

export default [
  {
    text: '前端',
    ariaLabel: 'front end',
    children: [
      { text: 'html', link: '/frontend/html/' },
      { text: 'css', link: '/frontend/css/' },
      { text: 'js', link: '/frontend/js/' },
      { text: 'ts', link: '/frontend/ts/ts常见符号的含义和用法.html' },
      { text: 'vite', link: '/frontend/vite/sortUserPlugins.html' }
      // { text: 'vite', link: readFileList('/frontend/vite/')[0].link }
    ]
  },
  {
    text: '面试题',
    link: '/interview/'
    // link: readFileList('interview')[0].link
  },
  {
    text: 'linux',
    link: readFileList('linux')[0].link,
  },
  {
    text: '博文',
    link: '/guide/',
    // link: readFileList('guide')[0].link,
  },
  {
    text: '区块链',
    link: readFileList('blockchain')[0].link,
  },
  {
    text: '随写',
    link: readFileList('daily')[0].link
  },
  { 
    text: '考研',  
    ariaLabel: 'PubMed',
    children: [
      { text: '数学', link: '/examination/math/' },
      { text: '英语', link: '/examination/english/' },
      { text: '政治', link: '/examination/politics/' },
      // { text: '专业课', link: '/examination/math/' },
    ] 
  },
  {
    text: 'github',
    link: 'https://github.com/305810827'
  }
]

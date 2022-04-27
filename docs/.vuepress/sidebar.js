const readFileList = require("../../scripts/readFileList.js");
module.exports = {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: readFileList('guide')
        }
      ],
      '/linux/': [
        {
          title: 'linux',
          children: readFileList('linux')
        }
      ],
      '/question/': [
        {
          title: '每日一题',
          collapsable: false,
          children: readFileList('question')
        }
      ],
      '/interview/': [
        {
          title: 'javascript',
          // collapsable: true,
          children: readFileList('interview/js')
        }, {
          title: 'css',
          // collapsable: true,
          children: readFileList('interview/css')
        }, {
          title: 'vue',
          // collapsable: true,
          children: readFileList('interview/vue')
        }, {
          title: 'netword',
          // collapsable: true,
          children: readFileList('interview/netword')
        }, {
          title: 'Algorithms',
          // collapsable: true,
          children: readFileList('interview/Algorithms')
        }, {
          title: 'other',
          // collapsable: true,
          children: readFileList('interview/other')
        }
      ],
      '/frontend/js/': [
            '',
            'array',
            'object',
            'math',
            'date',
            'set',
            'map',
            'reflect',
      ],
    }

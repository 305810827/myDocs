const readFileList = require("../../scripts/readFileList.js");
module.exports = {
      '/guide/': [
        {
          text: 'Guide',
          collapsable: false,
          children: readFileList('guide')
        }
      ],
      '/linux/': [
        {
          text: 'linux',
          children: readFileList('linux')
        }
      ],
      '/question/': [
        {
          text: '每日一题',
          collapsable: false,
          children: readFileList('question')
        }
      ],
      '/interview/': [
        {
          text: 'javascript',
          collapsible: false,
          children: readFileList('interview/js')
        }, {
          text: 'css',
          collapsable: true,
          children: readFileList('interview/css')
        }, {
          text: 'vue',
          collapsable: true,
          children: readFileList('interview/vue')
        }, {
          text: 'netword',
          collapsable: true,
          children: readFileList('interview/netword')
        }, {
          text: 'Algorithms',
          collapsable: true,
          children: readFileList('interview/Algorithms')
        }, {
          text: 'other',
          collapsable: true,
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

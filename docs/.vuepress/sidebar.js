import readFileList from "../../scripts/readFileList.js"
export default {
    '/guide/': [
        {
            text: 'Guide',
            collapsable: false,
            children: readFileList('guide')
        }
    ],
    '/blockchain/': [
        {
            text: '',
            collapsable: false,
            children: readFileList('blockchain')
        }
    ],
    '/daily/': [
        {
            text: '',
            collapsable: false,
            children: readFileList('daily')
        }
    ],
    '/linux/': [
        {
            text: 'linux',
            collapsable: false,
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
            collapsable: false,
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
    '/frontend/vite/': [
        '',
        'sortUserPlugins'
    ],
    '/examination/': [
        {
            text: '数学',
            collapsable: false,
            children: readFileList('examination/math')
        },
        {
            text: '政治',
            collapsable: false,
            children: readFileList('examination/politics')
        }
       
    ],

    '/examination/': [
        {
            text: '英语',
            collapsable: false,
            children: readFileList('examination/english')
        },
       
    ],

   
}

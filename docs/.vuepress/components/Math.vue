<template>
  <Mind :mindData="mindData"></Mind>
</template>
  
  <script>
  import Mind from "./Mind.vue"

  export default {
    components: {
      Mind
    },
    data() {
      return {
        mindData: {
            meta: {
                name: 'math',
                author: 'xuyanjie',
                version: '0.2',
            },
            format: 'node_array',
            data: [
                { id: 'root', isroot: true, topic: '数学' },
                {
                    'id': 'sub1',
                    'parentid': 'root',
                    'topic': '高等数学',
                    'background-color': '#0000ff',
                },
                { id: 'sub11', parentid: 'sub1', topic: '数列、函数及其极限' },
                // { id: 'sub12', parentid: 'sub1', topic: 'jk' },
                { id: 'sub2', parentid: 'root', topic: '概率论', 'background-color': '#0000ff', },
                { id: 'sub3', parentid: 'root', topic: '线性代数', 'background-color': '#0000ff', },

                {
                    'id': 'sub4',
                    'parentid': 'root',
                    'topic': '公式',
                    'direction': 'left',
                    'background-color': '#0000ff',
                },
                // { id: 'sub41', parentid: 'sub4', topic: '导数专项' },
                { id: 'sub41', parentid: 'sub4', topic: '常用导数公式', url:'/examination/math/formula/常用导数公式.html' },
                { id: 'sub42', parentid: 'sub4', topic: '常用积分公式', url:'/examination/math/formula/常用积分公式.html' },
                { id: 'sub43', parentid: 'sub4', topic: '常用极限公式', url:'/examination/math/formula/常用极限公式.html' },
                // { id: 'sub42', parentid: 'sub4', topic: '积分专项' },
                // { id: 'sub43', parentid: 'sub4', topic: 'jk' },
            ],
        }
      }
    }
    
  }
  </script>
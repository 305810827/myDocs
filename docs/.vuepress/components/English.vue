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
                name: 'english',
                author: 'xuyanjie',
                version: '0.2',
            },
            format: 'node_array',
            data: [
                { id: 'root', isroot: true, topic: '英语' },

                // {
                //     'id': 'sub1',
                //     'parentid': 'root',
                //     'topic': '高等数学',
                //     'background-color': '#0000ff',
                // },
                // { id: 'sub11', parentid: 'sub1', topic: '函数和数列', url: '/examination/math/fx.html' },
                // { id: 'sub12', parentid: 'sub1', topic: 'sub12' },
                // { id: 'sub13', parentid: 'sub1', topic: 'sub13' },

                // { id: 'sub2', parentid: 'root', topic: '概率论' },

                // { id: 'sub21', parentid: 'sub2', topic: 'sub21' },
                // {
                //     'id': 'sub22',
                //     'parentid': 'sub2',
                //     'topic': 'gao',
                //     'foreground-color': '#33ff33',
                // },

                // { id: 'sub3', parentid: 'root', topic: '线性代数' },
            ],
        }
      }
    }
    
  }
  </script>
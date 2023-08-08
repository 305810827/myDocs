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
                { id: 'sub11', parentid: 'sub1', topic: '函数的概念与特性' },
                { id: 'sub111', parentid: 'sub11', topic: '函数' },
                { id: 'sub112', parentid: 'sub11', topic: '反函数' },
                { id: 'sub113', parentid: 'sub11', topic: '复合函数' },
                { id: 'sub114', parentid: 'sub11', topic: '四种特性' },
                { id: 'sub1141', parentid: 'sub114', topic: '有界性' },
                { id: 'sub1142', parentid: 'sub114', topic: '单调性' },
                { id: 'sub1143', parentid: 'sub114', topic: '奇偶性' },
                { id: 'sub1144', parentid: 'sub114', topic: '周期性' },
                { id: 'sub1145', parentid: 'sub114', topic: '重要结论' },

                { id: 'sub12', parentid: 'sub1', topic: '函数的图像' },
                { id: 'sub121', parentid: 'sub12', topic: '直角坐标系下的图像' },
                { id: 'sub122', parentid: 'sub12', topic: '极坐标系下的图像' },
                { id: 'sub123', parentid: 'sub12', topic: '参数法-参数方程' },

                { id: 'sub12', parentid: 'sub1', topic: '函数的图像' },

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

<style scoped>
/deep/#jsmind_container {
    height: 1000px;
}
</style>
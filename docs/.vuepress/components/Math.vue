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

                { id: 'sub13', parentid: 'sub1', topic: '函数的图像' },

                { 
                  id: 'sub2', 
                  parentid: 'root', 
                  topic: '概率论', 
                  'background-color': '#0000ff'
                },

                { 
                  id: 'sub3', 
                  parentid: 'root', 
                  topic: '线性代数', 
                  'background-color': '#0000ff'
                },

                {
                  'id': 'sub4',
                  'parentid': 'root',
                  'topic': '公式',
                  'direction': 'left',
                  'background-color': '#0000ff',
                },
                
                { id: 'sub41', parentid: 'sub4', topic: '常用导数公式', url:'/examination/math/formula/常用导数公式.html' },
                { id: 'sub42', parentid: 'sub4', topic: '常用积分公式', url:'/examination/math/formula/常用积分公式.html' },
                { id: 'sub43', parentid: 'sub4', topic: '常用极限公式', url:'/examination/math/formula/常用极限公式.html' },
                { id: 'sub44', parentid: 'sub4', topic: '三角函数导数公式', url:'/examination/math/formula/三角函数导数公式.html' },

                
                 {
                  'id': 'sub5',
                  'parentid': 'root',
                  'topic': '常用基础知识',
                  'direction': 'left',
                  'background-color': '#0000ff',
                },

                { id: 'sub51', parentid: 'sub5', topic: '三角函数', url:'/examination/math/formula/三角函数.html'},

                { id: 'sub52', parentid: 'sub5', topic: '数列', url:'/examination/math/formula/数列.html' },
                { id: 'sub521', parentid: 'sub52', topic: '数列极限', url:'/examination/math/数列极限.html' },
                { id: 'sub522', parentid: 'sub52', topic: '数列极限', url:'/examination/math/运算规则.html' },
                { id: 'sub523', parentid: 'sub52', topic: '数列极限', url:'/examination/math/夹逼准则.html' },
                { id: 'sub524', parentid: 'sub52', topic: '数列极限', url:'/examination/math/单调有界准则.html' },

                { id: 'sub53', parentid: 'sub5', topic: '指数运算法则', url:'/examination/math/formula/指数运算法则.html' },
                { id: 'sub54', parentid: 'sub5', topic: '对数运算法则', url:'/examination/math/formula/对数运算法则.html' },
                { id: 'sub55', parentid: 'sub5', topic: '一元二次方程基础', url:'/examination/math/formula/一元二次方程基础.html' },
                { id: 'sub56', parentid: 'sub5', topic: '因式分解公式', url:'/examination/math/formula/因式分解公式.html' },
                { id: 'sub57', parentid: 'sub5', topic: '阶乘与双阶乘', url:'/examination/math/formula/阶乘与双阶乘.html' },
                { id: 'sub58', parentid: 'sub5', topic: '常用不等式', url:'/examination/math/formula/常用不等式.html' },


                
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
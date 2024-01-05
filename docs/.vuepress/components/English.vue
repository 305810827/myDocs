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
                { id: 'sub1', parentid: 'root', topic: '[labor]:劳动', url:'/examination/english/labor.html' },
                { id: 'sub2', parentid: 'root', topic: '[oper]:工作', url:'/examination/english/oper.html' },
                { id: 'sub3', parentid: 'root', topic: '[mand],[mend]:命令;委托', url:'/examination/english/mand.html'},
                { id: 'sub4', parentid: 'root', topic: '[meter],[mens]:测量', url:'/examination/english/meter.html'},
                { id: 'sub5', parentid: 'root', topic: '[merc]:贸易；报酬', url:'/examination/english/merc.html'},
                { id: 'sub6', parentid: 'root', topic: '[not]:知道；标志', url:'/examination/english/not.html'},

                { id: 'sub7', parentid: 'root', topic: '[nounce],[nunci]:报告', url:'/examination/english/nounce.html'},
                { id: 'sub8', parentid: 'root', topic: '[pel],[puls]:推动;驱使', url:'/examination/english/pel.html'},
                
                { id: 'sub9', parentid: 'root', topic: '[spec],[spi(c)],[scop]:看，观察', url:'/examination/english/spec.html'},
                { id: 'sub10', parentid: 'root', topic: '[pel],[puls]:推动;驱使', url:'/examination/english/pel.html'},

                { id: 'sub11', parentid: 'root', topic: '[vis],[vid]:看见', url:'/examination/english/vis.html'},
                { id: 'sub12', parentid: 'root', topic: '[vid],[vis]:分开', url:'/examination/english/vid.html'},

                { id: 'sub13', parentid: 'root', topic: '[spir]:呼吸', url:'/examination/english/spir.html'},
                { id: 'sub14', parentid: 'root', topic: '[vid],[vis]:分开', url:'/examination/english/sper.html'},

                { id: 'sub15', parentid: 'root', topic: '[rod],[ros]:啃咬', url:'/examination/english/rod.html'},
                { id: 'sub16', parentid: 'root', topic: '[cant],[cent]:唱', url:'/examination/english/cant.html'},
                { id: 'sub17', parentid: 'root', topic: '[dic],[dict]:说;宣称', url:'/examination/english/dic.html'},




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
<template>
  <div class="mind">
    <div id="jsmind_container" name="jsmind_container"></div>
  </div>
</template>
  
  <script>
  import jsMind from "jsmind"
  export default {
    name: 'MyMind',
    props: {
      mindData: {
        type: Object,
        default: () => {}
      }
    },
    mounted() {
        let options = {
            container: 'jsmind_container',
            editable: false,
            theme: 'primary',
        };
        let jm = new jsMind(options);


        // 获取容器元素
        const container = document.getElementById('jsmind_container');
        console.log(container, '22');
        // 添加节点点击事件
        container.addEventListener('mousedown', (event) => {
          console.log(event.target.tagName);
          const target = event.target;
          if (target.tagName === 'JMNODE') {
            const nodeId = target.getAttribute('nodeid');
            const node = jm.get_node(nodeId);
            if (node && node.data.url) {
              // location.href="linux/rm.html"
              console.log('Node clicked:', node.data, location);
              // 在这里执行点击节点后的操作，例如显示节点内容、弹出编辑框等
              location.href = location.origin + node.data.url
            }
          }
        });

        jm.show(this.mindData);
    }
  }
  </script>
<style scoped>
/* .page-meta { */
  /* visibility: hidden; */
/* } */
#jsmind_container {
  width: 100%;
  height: 600px;
}
</style>
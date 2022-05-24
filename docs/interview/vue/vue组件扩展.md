# **Vue中如何扩展一个组件**

mixins、extends、slots、composition api

##### 1、mixins

值可以是一个混合对象数组,混合实例可以包含选项,将在extend将相同的选项合并 mixins代码:

```
    var mixin={
    data:{mixinData:'我是mixin的data'},
    created:function(){
      console.log('这是mixin的created');
    },
    methods:{
      getSum:function(){
        console.log('这是mixin的getSum里面的方法');
      }
    }
  }

  var mixinTwo={
    data:{mixinData:'我是mixinTwo的data'},
    created:function(){
      console.log('这是mixinTwo的created');
    },
    methods:{
      getSum:function(){
        console.log('这是mixinTwo的getSum里面的方法');
      }
    }
  } 

  var vm=new Vue({
    el:'#app',
    data:{mixinData:'我是vue实例的data'},
    created:function(){
      console.log('这是vue实例的created');
    },
    methods:{
      getSum:function(){
        console.log('这是vue实例里面getSum的方法');
      }
    },
    mixins:[mixin,mixinTwo]
  })
  
  //打印结果为:
  这是mixin的created
  这是mixinTwo的created
  这是vue实例的created
  这是vue实例里面getSum的方法
复制代码
```

结论: 1.mixins执行的顺序为mixins>mixinTwo>created(vue实例的生命周期钩子); 2.选项中数据属性如data,methods,后面执行的回覆盖前面的,而生命周期钩子都会执行



##### 2、extends

extends用法和mixins很相似,只不过接收的参数是简单的选项对象或构造函数,所以extends只能单次扩展一个组件

```
var extend={
    data:{extendData:'我是extend的data'},
    created:function(){
      console.log('这是extend的created');
    },
    methods:{
      getSum:function(){
        console.log('这是extend的getSum里面的方法');
      }
    }
  }

  var mixin={
    data:{mixinData:'我是mixin的data'},
    created:function(){
      console.log('这是mixin的created');
    },
    methods:{
      getSum:function(){
        console.log('这是mixin的getSum里面的方法');
      }
    }
  }
  
    
  var vm=new Vue({
    el:'#app',
    data:{mixinData:'我是vue实例的data'},
    created:function(){
      console.log('这是vue实例的created');
    },
    methods:{
      getSum:function(){
        console.log('这是vue实例里面getSum的方法');
      }
    },
    mixins:[mixin],
    extends:extend
  })
  
  //打印结果
  这是extend的created
  这是mixin的created
  这是vue实例的created
  这是vue实例里面getSum的方法
复制代码
```

结论: 1.extends执行顺序为:extends>mixins>mixinTwo>created 2.定义的属性覆盖规则和mixins一致
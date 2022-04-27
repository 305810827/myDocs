```javascript
let a = 1
function A(b){
  this.a=b;
  if(b==[1]){
    a+=b;
    return b;
  }else if(b==2){
    a+=2*b;
    return this;
  }else{
    a+=3*b;
    return {};
  }
}

 

let c = new A(1);
console.log(a);    // 2
console.log(c.a);  // 1


a=1;
let d = new A([1]);
console.log(a);    //	4
console.log(d.a);  // undefined


a=1;
let e=A("1");
console.log(a);   // "11"
console.log(e.a); // undefined

 
a=1;
let f=A(2);
console.log(a);   // 5
console.log(f.a); // 2

```


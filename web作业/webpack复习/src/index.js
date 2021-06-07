console.log("bbb")

import B from './a';
console.log(B)
const  {name} = require('./index.json');

console.log(name);
const fn=()=>{
  console.log("Aaa");
}
fn();
import './index.css';


@log('hi')
class MyClass { }

function log(text) {
  return function(target) {
    target.prototype.logger = () => `${text}，${target.name} 被调用`
  }
}

const test = new MyClass()
console.log(test.logger()) // hello，MyClass 被调用

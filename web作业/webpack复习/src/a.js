import $ from "jquery";
console.log(window.$)
function * gen(){
  yield "aaaa"
}
import logo from "./logo.png"
let img = new Image()
console.log(logo)
img.src = logo
document.body.appendChild(img)
console.log(gen().next());

const  B= "BBB";
export default B;



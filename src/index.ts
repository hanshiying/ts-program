import { sum } from "./common"

const message = 'hello typescritp!!'
const sumVar = sum(1, 3)
console.log(sumVar)
document.querySelectorAll('#app')[0].innerHTML = message
console.log(sum(4, 25))
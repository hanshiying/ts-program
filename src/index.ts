// import { sum } from "./common"

const message = 'hello typescritp!!'
document.querySelectorAll('#app')[0].innerHTML = message
class animal {
    constructor(public name: string) {
        this.name = name
    }
    call1() {
        return this
    }
    call2() {
        return this
    }
}
class cat extends animal {
    speak() {
        console.log(`cat ${this.name} is speaking`)
        return this
    }
}
new cat('33').call1().call2().speak()

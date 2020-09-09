import { LinkedList } from '../linked-list/linked-list'

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }
    pop() {
        return this.list.deleteHead()

    }
    isEmpty() {
        this.list.isEmpty()
    }
    toArray() {
        return this.list.toArray()
    }

}

const stack = new Stack()
stack.push('Repeat')
stack.push('Sleep')
stack.push('Fucc')
stack.push('Train')
stack.push('Code')
stack.push('Eat')
console.log(stack.toArray())
//console.log('Popped Element ==>', stack.pop())
//console.log(stack.toArray())
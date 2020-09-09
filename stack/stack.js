//A Simplified Array.
//Why Stack when I could just use an array? Bc I may want to limit the interaction with the data,
//I may not want data to be added at the beginning. I may need the LIFO approach.
// Less options === cleaner code

class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }
    toArray() {
        return [...this.items]
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
console.log('Popped Element ==>', stack.pop())
console.log(stack.toArray())

//LIFO Data Structure, 
// New Items are pushed to the top of the Stack
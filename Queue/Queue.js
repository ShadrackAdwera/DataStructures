//FIFO Data Structure

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        return this.items.shift()
    }
    toArray() {
        return [...this.items]
    }
    isEmpty() {
        return this.items.length === 0 
    }
}

const queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
console.log(queue.toArray())
console.log('Dequeued ==> ', queue.dequeue())
console.log(queue.toArray())
import { LinkedList } from '../linked-list/linked-list'

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }
    dequeue() {
        return this.list.deleteHead()
    }
    toArray() {
        return this.list.toArray()
    }
    isEmpty() {
        return this.list.isEmpty()
    }
}
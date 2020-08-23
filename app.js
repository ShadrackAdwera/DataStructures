class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = {value: value, next: null}
        
        if(this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode
        if(!this.head) {
            this.head = newNode
        }
    }

    //Output all elements
    toArray() {
        const elements = []
        let currNode = this.head

        while(currNode) {
            elements.push(currNode)
            currNode = currNode.next
        }
        return elements
    }
}




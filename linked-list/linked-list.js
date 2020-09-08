//List should know about the head (starting value) and the tail (ending value)
//Element should know about the next one in line

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(value) {
    const newNode = {value: value, next: null }
    if(this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode

    if(!this.head) {
      this.head = newNode
    }
  }

  prepend(value) {
    let currNode = { value: value, next: this.head }
    this.head = currNode
    if(!this.tail) {
      this.tail = currNode
    }
  }

  find(value) {
    if(!this.head) {
      return
    }
    let currNode = this.head

    while(currNode) {
      if(currNode.value===value) {
        return currNode
      }
      currNode = currNode.next
    }
    return 'Value not found'
  }

  toArray() {
    const elements = []
    let currElem = this.head
    while(currElem) {
      elements.push(currElem)
      currElem = currElem.next
    }
    return elements
  }

  delete(value) {
    if(!this.head) {
      return
    }
    while(this.head && this.head.value===value) {
      this.head = this.head.next
    }
    let currNode = this.head
    while(currNode.next) {
      if(currNode.next.value ===value) {
        currNode.next = currNode.next.next
      } else {
        currNode = currNode.next
      }
    }
    if(this.tail) {
      this.tail = currNode
    }
  }


}


const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append('Deez Nuts');
linkedList.append(true);
linkedList.append(5)
linkedList.append(5)
linkedList.append(1.2345);
linkedList.prepend('First Value')
linkedList.prepend('First Value')

console.log(linkedList.toArray());

linkedList.delete(5)
linkedList.delete('First Value')
linkedList.delete(1)

console.log(linkedList.toArray())

console.log(linkedList.find(true))
console.log(linkedList.find(false))

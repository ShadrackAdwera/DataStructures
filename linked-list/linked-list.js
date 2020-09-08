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
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append('Deez Nuts');
linkedList.append(true);
linkedList.append(1.2345);
linkedList.prepend('First Value')

console.log(linkedList.toArray());

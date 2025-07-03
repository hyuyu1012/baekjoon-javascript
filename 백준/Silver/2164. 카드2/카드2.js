const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // 삽입은 연산에 없어서 간단하게 구현하기만 하면 됨
  insert(data) {
    const newNode = new Node(data);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }

    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail  = newNode;
      this.length++;
    }
  }

  delete() {
    const data = this.head.data;
    this.head = this.head.next;
    if(this.length === 1 ) {

    }
    else {
      this.head.prev = null;
    }
    this.length--;
    
    return data;
  }
  printList() {
    const result = [];
    let current = this.head;
    
    while(current !== null) {
     result.push({current});
     current = current.next; 
    }
    console.log(result.join(" "));
  }
}

const list = new List();
for (let i = 1; i<=n; i++) {
  list.insert(i); 
}

while(list.length !== 1) {
  list.delete();
  const temp = list.delete();
  list.insert(temp);
}


console.log(list.head.data);
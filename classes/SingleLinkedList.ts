import Node from "./Node";

export default class SingleLinkedList<T> {
  head: Node<T> = null;
  tail: Node<T> = null;

  public insertAtStart(data: T) {
    const node = new Node<T>();
    node.data = data;

    node.next = this.head ? this.head : null;
    this.head = node;

    if(this.tail == null) this.tail = node;
  }

  public insertAtEnd(data: T) {
    const node = new Node<T>();
    node.data = data;

    if(this.tail) this.tail.next = node;
    this.tail = node;

    if(this.head == null) this.head = node;
  }

  public insertAtPosition(data: T, position: number) {
    if(position < 0) throw new Error('negative index supplied');

    const length = this.getLength();

    if(position === 0) {
      this.insertAtStart(data);
    } else if(position === length) {
      this.insertAtEnd(data);
    } else if(position > length) {
      throw new Error('index should be <= list length');
    } else {
      const node = new Node<T>();
      node.data = data;

      let index = 0;
      let currentNode = this.head;

      while(index < position - 1) {
        currentNode = currentNode.next;
        index++;
      }

      node.next = currentNode.next;
      currentNode.next = node;
    }
  }

  public getLength() {
    let length = 0;
    let current = this.head;

    while(current) {
      length++;
      current = current.next;
    }

    return length;
  }

  public traverse() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
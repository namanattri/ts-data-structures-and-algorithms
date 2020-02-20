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

  public traverse() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
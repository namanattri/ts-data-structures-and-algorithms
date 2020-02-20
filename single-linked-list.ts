import SingleLinkedList from './classes/SingleLinkedList';

const s1 = new SingleLinkedList<number>();
const s2 = new SingleLinkedList<number>();
const s3 = new SingleLinkedList<number>();

s1.insertAtStart(1);
s1.insertAtStart(2);
s1.insertAtStart(3);
s1.insertAtStart(4);
s1.insertAtStart(5);

s2.insertAtEnd(1);
s2.insertAtEnd(2);
s2.insertAtEnd(3);
s2.insertAtEnd(4);
s2.insertAtEnd(5);

s3.insertAtStart(1);
s3.insertAtEnd(2);
s3.insertAtStart(3);
s3.insertAtEnd(4);
s3.insertAtStart(5);

console.log("S1: ");
s1.traverse(); // 5 4 3 2 1

console.log("S2: ");
s2.traverse(); // 1 2 3 4 5

console.log("S3: ");
s3.traverse(); // 5 3 1 2 4
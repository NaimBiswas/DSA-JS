const arrayOne = ["a", "b", "c", "d"];
const arrayTwo = ["d", "z", "x", "y"];

const HelloFun = (arrOne, arrTwo) => {
  console.log(Math.pow(2, 1000));
  const filteredArr = arrOne.filter((x) => arrTwo.includes(x));
  const result = filteredArr.length ? true : false;
  return true;
};
// HelloFun(arrayOne, arrayTwo);

// Google interview Question return the first repeating numbers

// Given an array = [2,5,2,1,45,9,4,2]
// It shoud return 2

// Given an array = [1,5,1,2,1,45,9,4,2]
// It shoud return 1

// Given an array = [1,2,3,4,5]
// It shoud return undefine

const repNumber = (array) => {
  const dataObject = {};
  for (let index = 0; index < array.length; index++) {
    if (dataObject[array[index]] !== undefined) {
      console.log(array[index]);
      return;
    } else {
      dataObject[array[index]] = index;
    }
  }
};

// repNumber([1, 5, 5, 2, 1, 45, 9, 4, 2]);

// linkedList in js
class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = { value: value, next: null };
    this.tail.next = newNode;
    this.length += 1;
    this.tail = newNode;
  }
  preAppend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    this.length += 1;
    this.tail = { value: value, next: null };
  }
}

// const myLinkedList = new linkedList(3);
// myLinkedList.append(5);
// myLinkedList.append(10);
// myLinkedList.append(25);
// myLinkedList.preAppend(1);
// myLinkedList.preAppend(2);
// console.log(JSON.stringify(myLinkedList.head), myLinkedList.length);

// Binary Search with linkedList
class Node {
  constructor(value) {
    (this.left = null), (this.right = null);
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(props) {
    this.root = null;
  }
  insert(value) {
    const newValue = new Node(value);
    if (!this.root) {
      this.root = newValue;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        // left
        if (!currentNode.left) {
          currentNode.left = newValue;
          console.log(currentNode);
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // right
        if (!currentNode.right) {
          currentNode.right = newValue;
          console.log(currentNode);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
    return this;
  }
  lookup(value) {}
  remove(value) {}
}

// const Tree = new BinarySearchTree();
// Tree.insert(20);
// Tree.insert(30);
// Tree.insert(35);
// console.log(Tree);
//      20
//    15   30
//  13        35

# DSA-JS By Naim Biswas (Software Developer)
const arrayOne = ["a", "b", "c", "d"];
const arrayTwo = ["d", "z", "x", "y"];

const HelloFun = (arrOne, arrTwo) => {<br />
  console.log(Math.pow(2, 1000));<br />
  const filteredArr = arrOne.filter((x) => arrTwo.includes(x));<br />
  const result = filteredArr.length ? true : false;<br />
  return true;<br />
};<br />
// HelloFun(arrayOne, arrayTwo);<br />

// Google interview Question return the first repeating numbers<br />
<br />
// Given an array = [2,5,2,1,45,9,4,2]
// It shoud return 2

// Given an array = [1,5,1,2,1,45,9,4,2]
// It shoud return 1

// Given an array = [1,2,3,4,5]
// It shoud return undefine

const repNumber = (array) => { <br />
  const dataObject = {};<br />
  for (let index = 0; index < array.length; index++) {<br />
    if (dataObject[array[index]] !== undefined) {<br />
      console.log(array[index]);<br />
      return;<br />
    } else {<br />
      dataObject[array[index]] = index;<br />
    }<br />
  }<br />
};<br />
<br />
// repNumber([1, 5, 5, 2, 1, 45, 9, 4, 2]);<br />

// linkedList in js<br />
class linkedList {<br />
  constructor(value) {<br />
    this.head = {<br />
      value: value,<br />
      next: null,<br />
    };<br />
    this.tail = this.head;<br />
    this.length = 1;<br />
  }<br />
  append(value) {<br />
    const newNode = { value: value, next: null };<br />
    this.tail.next = newNode;<br />
    this.length += 1;<br />
    this.tail = newNode;<br />
  }<br />
  preAppend(value) {<br />
    const newNode = { value: value, next: this.head };<br />
    this.head = newNode;<br />
    this.length += 1;<br />
    this.tail = { value: value, next: null };<br />
  }<br />
}<br />
<br />
const myLinkedList = new linkedList(3);<br />
myLinkedList.append(5); <br />
myLinkedList.append(10);<br />
myLinkedList.append(25);<br />
myLinkedList.preAppend(1);<br />
myLinkedList.preAppend(2);<br />
console.log(JSON.stringify(myLinkedList.head), myLinkedList.length);<br />

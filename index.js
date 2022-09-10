const arrayOne = ["a", "b", "c", "d"];
const arrayTwo = ["d", "z", "x", "y"];

const HelloFun = (arrOne, arrTwo) => {
  console.log(Math.pow(2, 1000));
  const filteredArr = arrOne.filter((x) => arrTwo.includes(x));
  const result = filteredArr.length ? true : false;
  return true;
};
HelloFun(arrayOne, arrayTwo);

// Google interview Question return the first repeating numbers

// Given an array = [2,5,2,1,45,9,4,2]
// It shoud return 2

// Given an array = [1,5,1,2,1,45,9,4,2]
// It shoud return 1

// Given an array = [2,5,2,1,45,9,4,2]
// It shoud return 2

// Given an array = [1,2,3,4,5]
// It shoud return 2

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest
}

function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}

function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}

biggestNumberInArray3(array3)

amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}
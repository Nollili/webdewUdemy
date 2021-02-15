const sum = (a, b) => a + b

//Closure: 
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) 

//Currying: 
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) 


//Currying:
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) 

//Composing: 
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)  

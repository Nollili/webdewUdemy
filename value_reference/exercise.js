let a = 5;
let b = a;

b++;

let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2);


let c = [1, 2, 3, 4, 5];
let d = [].concat(c);
console.log(c);

let obj3 = { a: 'a', b: 'b', c: { deep: 'try and copy me' } };
let clone = Object.assign({}, obj);
let clone2 = { ...obj3 };
let superClone = JSON.parse(JSON.stringify(obj3));

obj3.c.deep = 'hahahaha';
console.log(obj3);
console.log(clone);
console.log(clone2);
console.log(superClone);
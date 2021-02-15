
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(2))


const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')))


console.log(greeting.flatMap(x => x.join(' ')).join(' '))

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity))

const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimEnd().trimStart())


const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)

updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)
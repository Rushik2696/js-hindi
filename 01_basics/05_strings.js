const name = "rushik"
const repoCount = 10

// console.log(name  + repoCount + "+value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const GameName = new String('rushik-patel-hc')

console.log(GameName[0]);
console.log(GameName.__proto__);


// console.log(GameName.length);
// console.log(GameName.toUpperCase());
// console.log(GameName.charAt(5));
// console.log(GameName.indexOf('i'));

const newString = GameName.substring(0,5)
console.log(newString);

const anotherString = GameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh %20hfrue"

console.log(url.replace('%20', '-'))

console.log(url.includes('sunder'))

console.log(GameName.split('-'));


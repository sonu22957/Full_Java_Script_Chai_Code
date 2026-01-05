const name ="Sonu"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log('Helo my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Son-u')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne=" Sonu "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trim());

const url = "https://sonupanditbth%20pandit"

console.log(url.replace('20%','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
















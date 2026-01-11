//singleton
//object Create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sonu",
    "full name": "Sonu pandit",
    age: 23,
    mySym: "mykey1",
    location:"Bettiah",
    email:"sonupanditbth2003@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]



}
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym);

JsUser.email = "sonupanit"
Object.freeze(JsUser)
JsUser.email = "ddrftgyhjk"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");

    
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this .name}`);

    
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());




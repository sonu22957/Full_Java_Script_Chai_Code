const user = {
    username: "sonu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

 user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     console.log(this);

    
// }
// chai()


// const chai = function () {
//     let username = "SOnu"
//     console.log(this.username);
    
// }
// chai()

//erro function
const chai = () => {
    let username = "SOnu"
    console.log(this);
    
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//Implicite return
//const addTwo = (num1, num2) =>  num1+num2

// const addTwo =(num1, num2) => (num1 + num2)

const addTwo =(num1, num2) => ({username: "Sonu"})

console.log(addTwo(2,3));


const myArray = [2, 5,3,7,8]

myArray.forEach()

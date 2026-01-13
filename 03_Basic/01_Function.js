function sayMyName(){
    console.log("S");
    console.log("o");
    console.log("n");
    console.log("u");
    console.log("p");

    
}
//sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);

    
//}
addTwoNumber(2,3);
addTwoNumber(2,"a")
addTwoNumber(2,null)

function addTwoNumber(num1,num2){
    //let result = num1+num2
    //return result

    return num1+num2
    
    
}

const result = addTwoNumber(3,5)

console.log("Resut:",result);



function loginUserMessage(username){
    // if (username===undefined) {
    //     console.log("please enter a username");
        
        
    // }

    if (!username) {
        console.log("please enter a user name");
        
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sonu"))


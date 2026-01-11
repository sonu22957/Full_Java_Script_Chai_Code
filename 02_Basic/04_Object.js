//const trinderUser = new Object()

const trinderUser = {}

trinderUser.id = "123abc"
trinderUser.name = "Sammy"
trinderUser.isLoggedIn = false

//console.log(trinderUser);

const regularUser = {
    email: "sddfggh",
    fullname: {
        userfullname: {
            firstname: "sonu",
            lastname: "pandit"
        }
    }
}
console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1,obj2}
console.log(obj3);



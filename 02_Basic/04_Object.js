

// const trinderUser = new Object()
const trinderUser = {}

trinderUser.id = "123abc"
trinderUser.name = "Sammy"
trinderUser.isLoggedIn = false

// console.log(trinderUser);

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

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 } 
const obj3 = { ...obj1, ...obj2 } 
console.log(obj3);

const user = [
    {
        name: "Sonu",
        email: "sdsfdf@dfg",
        password: "123456",
    },
]

// ✅ correct index (0)
// console.log(user[0].email);

// console.log(trinderUser);

// console.log(Object.keys(trinderUser));
// console.log(Object.values(trinderUser));
// console.log(Object.entries(trinderUser));

// console.log(trinderUser.hasOwnProperty('isLoggedIn'));



const corse = {
    coursName:"Hindi Js",
    coursePrice:"999",
    coursTeache:"hitesh"
}
    const {coursTeache: teache} = course
    console.log(teache);
    





    [
        {},
        {},
        {}
    ]

    
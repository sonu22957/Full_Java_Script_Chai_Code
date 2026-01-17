// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item)=>{
//     //console.log(item);
//     return item
    

// })

// console.log(value);


// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=>{
//    return num>4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
        
//     }
// })
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
         edition: 2004},
    { title: 'Book Two', genre: 'Scince', publish: 1981,
         edition: 2004},
    { title: 'Book Tree', genre: 'Chemertry', publish: 1941,
         edition: 2004},
    { title: 'Book Four', genre: 'History', publish: 1981,
         edition: 2004},
    { title: 'Book Five', genre: 'Science', publish: 1981,
         edition: 2004},
    { title: 'Book Six', genre: 'Fiction', publish: 1981,
         edition: 2004},
    { title: 'Book Seven', genre: 'Fiction', publish: 1981,
         edition: 2004},
    { title: 'Book Eight', genre: 'Fiction', publish: 1981,
         edition: 2004},
    { title: 'Book Night', genre: 'Fiction', publish: 1981,
         edition: 2004},
];

let userBook = books.filter( (bk)=> bk.genre === 'History')

userBook = books.filter( (bk)=> {return bk.publish >= 1941})

console.log(userBook);

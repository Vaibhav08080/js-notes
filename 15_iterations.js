// for loop
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// let index = 10
// while (index<11) {
    
    
// }


// for o loop
const arr= [1,2,3,4,56,]
for (const i of arr) {
    // console.log(i);
    
    
}

const map = new Map()
map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('PT', "Portugal")

// console.log(map);


for (const [key, value] of map ){ // used destructuing of the value 
    // console.log(key)
}

const myObj = {
    name:"vaibhav",
    value:1
}

// for (const [i,j] of myObj) {
//     console.log(i);
//      // objects are not iterable by thse loop
    
// }



// const myOBject = {
//     js:"javascript",
//     cpp:"c++",
//     rb:"RUBY"
// }

// for (const key in myOBject) {
//         const element = myOBject[key]; // for in loop is used in obejct
//         console.log(element);
        
        
//     }



    // agr for in loop arrays pe bhi lgaye to hoga ye keys return karega aur haan gelchode array ki bhi keys hoti h 0 01 02 03 type index betichod
const coding = ["js", "ruby", "java", "python"]
coding.forEach( function (val){
    // console.log(val);
    
}) 

coding.forEach((item)=>{


})

const myNums =[1,2,3,4,5,6,7,8,9,10]
const newNums =  myNums.filter((num)=> num>4) // iske andr condition deni padti h 
console.log(newNums);


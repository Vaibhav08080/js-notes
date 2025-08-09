const user ={
    username:"vaibhav",
    price:"111",
    welcomeMessage: function(){
        console.log(`${this.username} goodmorning sir`)


    }
}

function chai(){
    
    console.log(this) // this will return some thing 
}

function chaitwo(){
    let meow="meow"
    
    console.log(this.meow) // will get undefined 
}




const chaithree =()=>{
    const lover="her"
  
    console.log(this.lover); // we will get the undefined value
    

}


const addtwo = (num1,num2)=>{ // we are storing the value here of the arrow function in a variable
    return num1+num2
}

console.log(addtwo(2,3))


const addthree =(num1,num2)=> num1+num2   // this is known as implicit return in this we are returning without the return single line shit 

addthreevaribale=addthree(1,1)
console.log(addthreevaribale)
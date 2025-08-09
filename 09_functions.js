function saymyname(){
    console.log("moew");
    
}
saymyname // this is the refernce of the functions 
saymyname() // this is the calling of the functions we are saying that to execute the functions here


function addtwonumber(numbers1,numbers2){ // numbers1 and numbers2 are known as parameters 
    return(numbers1+numbers2) // retrun ke baad likha gya code ni chlta h likha aajyga chl tmkc
}
const forprinting=addtwonumber(3,4) // these are called arguements
console.log(forprinting);


function loginUserMessage(username="priya grahak"){ // default value
    return `${username} just logged in! nigga`

}

namefornigga = loginUserMessage("niggalal") // if some bkl dont pass anything then it shows undefined 
console.log(namefornigga);

function calculatecartprice(val1,val2,...val3){
      return val3
}
console.log(calculatecartprice(1,2,3,4))



const promiseOne= new Promise(function(resolve,reject){
    // do async something 
    //db call
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },)
})

promiseOne.then(function(){
    console.log("promise resolved")
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Task 2 completed")
})


const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chut@gmail.com"})

    },1000)

})

PromiseThree.then(function(user){
    console.log(user)

})


const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh" , Password:"@!23"})
        }
        else{
            console.log("chut fat gyi")
        }
    },1000)
})

PromiseFour.then((username)=>{console.log(username)}).catch(function(error){
    console.log(error)
}).finally(()=>{console.log("The promise is either resolved or rejected")})


const PromiseFive =new Promise(function(){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh" , Password:"@!23"})
        }
        else{
            console.log("JS went wrong")
        }
    },1000)

})

async function ConsumePromiseFive(){
    const response = await PromiseFive
}
// singleton 
// 
//obejct literals
const sym = Symbol("key1")
const JsUser ={
    name:"vaibhavsir",
    [sym]:"nigu",
    class:"SHNI",
    age:"19",
    location:"vaibhav@gmail.com",
    isLoggedIN:false,
    LastLoginDays:["monday" , "saturday"]



} //object bngya




// console.log(JsUser.LastLoginDays)
// console.log(JsUser["LastLoginDays"]) // iske andar str ki trh treat hotah isliye " " use karna padta 
// console.log(JsUser[sym]) 

JsUser.name="king"
// console.log(JsUser["name"]);
// Object.freeze(JsUser) // this is the function that is used in order to freeze the value so that no nigga can change the value 

JsUser.name="garib"
// console.log(JsUser["name"]);


// JsUser.functionnigga= function(){
// console.log("ji namaste");

// }
// JsUser.forthisfunction= function(){
// console.log(`hello bhai ! ${this.name}`); // this varibale is used in order to use the existing property of the same object wow 

// }

// console.log(JsUser.functionnigga());



// singleton one 
const tinderuser = new Object(
    {
        name:"sakshiji",
        value:"good",
        newobject: new Object({
            meow:"khikhi"
        })
    }
)

// console.log(tinderuser.name);
// console.log(tinderuser.newobject.meow);


// const obj1 ={1:"ramlal",2:"pogo"}
// const obj2 ={3:"kali",4:"malikkibeti"} // if use same key to last wala overwrite kardega 
// const obj3 =Object.assign({},obj1,obj2) // ye jo empty paranthesis h ye optional hote h inki mkc 
// const obj4={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));



const course ={
    coursename:"js in hindi",
    price:"999" ,
    courseInstructor:"hitesh sir"
}

const {courseInstructor}=course
console.log(courseInstructor)

// {
//     "name":"vibhu"
//     "class":"billionare"  jSON FORMAT
//     "favcountry":"LONDON"
// }


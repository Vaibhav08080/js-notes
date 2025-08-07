const Myass = [] // array declaration
const Myass1 = new Array(1,2,"ILOVEYOU") // another decalrartion iske andar hetrogenous bhi chl jayga
// arrays follow shallow opy mechanism 
// padhle idhr se -https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
 // Array methods 
 Myass.push(9)
 console.log(Myass);
 const newArr = Myass.join();
 console.log(newArr);
 

 // slice use karenge tb hame array ke andar changes show ni honge jo araay print hoga wo alg h aur hmara wala alg par agar ham splice use karenge to purana array modify hojyga aur jo n-1 wali tk padhta tha slice me ab wo n tk padhega 
 
const niggers =["rishi", "sujal " , "ujjwal"]
const notniggers= ["mayank" , "vaibhav"]

niggers.push(notniggers)  //this will push the notniggers array in the niggers array but as one entity => [ 'rishi', 'sujal ', 'ujjwal', [ 'mayank', 'vaibhav' ] ]
// console.log(niggers)


niggerplusnotniggers = notniggers.concat(niggers) // concat nya array bnake hi add karega isliye gand na maraye nya array bnaye 
console.log(niggerplusnotniggers)

const all_niggers= [...Myass] // this is termed as the spread operator this is very usefull 


const another_array = [1,2,3 ,4 ,[5,6],"ILOUVEYOUUUU"]
console.log(Array.isArray(""))
console.log(Array.from({name: "hitesh"})) // return empty cz this nigga cant figure it out what to print 
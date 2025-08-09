// javascript execution context 
// jab bhi code ko run karte h tab global ec bnta h iske andar this bnta h wo windows node num sabka alag hota h isliye padh lena imp topic h 
/// global execution context function execution context Eval execution phase 
// ek hota h memory creation phase phir hota h execution phase 
let val1=10
let val2=5
function addNum(Num1,Num2){
    let total = num1+num2
    return total 
}
let result1= addNum(val1,val2)
let result2=addNum(1,2)


// step 1 global execution hoga -->this
// phase 2 memory phase    val1=undefined val2=undefined
//add num->definition
//result1=undefined resulkt2=undefined
//step3 execution pahse 
// val1=10
//val2=5
// addnum ke liye then nya variable env aur ek execution thread banega (known as new executional context) ab iske liye dubra se execution phase and memory phase chalega
//memoryphase for function
//val1=undefined
//val2=undefiend
//total=undefeind
//execution phase 
//num1=1
//num2=2
//total=3 ye jo total h global execution context me retunr hoga
// ab ye delete bhi hoga 
//fir dubra aayga same 2 time function call ke liye
// C:\Users\lfis1\OneDrive\Desktop\js-revision\image.png  dekhlo call stack 


 


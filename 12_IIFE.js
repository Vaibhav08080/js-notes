// Immediately Invoked Function EXpression (IIFE)

function chaipilo(){
    console.log(`Thandi hogyi`) //--> normal function

}
chaipilo();


(function chaimatpio(){
    console.log("AB kya fayda !!"); // global scope pollution se bachne ke liye use hota hai
})();

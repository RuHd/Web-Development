// Function can receives parameters inside of it

// It has its own scope

// WAYS TO INVOKE:

// When an event occurs (EX: on click)
// When it's called in the code
// When it's self invoked

// RETURN

// After executing, the function will 'return" the value processed back to the "caller"

// FUNCTION AS VARIABLES

// We can store a function inside of a variable (EX: var x = myFunc())
// We can store the result returned by a function in a variable

// (EX: var = myFunc(1,1))
// ( myFunc(a,b) {
// 	RETURN a + b

// }

// Local variables can only be used inside the function where was declared from


var x = 1
function myFun() {
    return x+1
}

var y = myFun()

console.log(myFun())
console.log(y)

function sum() {
    var a = 1
    var soma = 0

    soma  += a
    setInterval(sum(), 5000)
    

}

console.log(sum())







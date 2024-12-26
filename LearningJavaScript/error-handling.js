//* try-catch, try-catch-finally

/*
* try: put your program
* catch: the errors are capture here / on getting error this block execute
* finally: irrespective of getting error or not this block execute  
*/

let userDetails = {
    name: "Banku",
}

try {
    if (userDetails.name === "Banku") {
        throw new Error("This ia a Banku threat") //* throw user define error
    }
    console.log(userDetails.name);
} catch (error) {
    console.log(error.name + ": " + error.message);
    console.log("Please provide proper input");
    
} finally {
    console.log("It's finally block");
}


function printName(name)
{
    if (name === "Banku") {
        throw new Error("This is a Banku threat");
    }
    console.log(name);
}

try {
    printName("Banku");
    
} catch (error) {
    console.log(error.message);
    
}
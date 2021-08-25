//Question One

function fizzString(str){
     let start = str[0];
     let end = str.charAt(str.length-1)
     

     if(start === "f" && end === "b"){
        return "FuzzBuzz"
    }else if(start === "f"){
        return "Fuzz"
    }else if(end === "b"){
        return "Buzz"
    }else{
        return str;
    }
}   
 
console.log(fizzString("fig"))
console.log(fizzString("dib"))
console.log(fizzString("fib"))





// Question Two

function blueTicket(a, b, c){
    ab = parseInt(a + b);
    bc = parseInt(b + c);
    ac = parseInt(a + c);
    if(ab === 10 || bc === 10 || ac === 10){
        return 10
    }else{
        return 0
    }
}
console.log(blueTicket(9, 1, 0))
console.log(blueTicket(9, 2, 0))
console.log(blueTicket(9, 1, 4))


// Question  Three

function bunnyEars(bunny){
    let bunnies = bunny * 2;
    return bunnies
    if(bunnies === 0){
        return bunnies
    }
    
}
console.log(bunnyEars(0))
console.log(bunnyEars(1))
console.log(bunnyEars(2))